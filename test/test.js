var assert = require('assert');
var CLI = require('./../src/CLI.js')
var PrimeTable = require('./../src/PrimeTable.js')
var chai = require('chai')
var expect = chai.expect;

//Checks to see if a given number is prime
function isPrime(n) {
  for(var i = 2; i < n; i++) {
    if(n % i == 0) {
      return false;
    }
  }
  return n > 1;
}

describe('Initial Test', function() {
  it('This should always pass, here just to make sure the tests are running', function() {
      assert.equal(1,1);
  });
});

describe('Using CLI module to get user defined N', function() {

  it('No flags given',function() {
    CLI.loadFlags(["node","index.js","-n","1"])
    assert.equal(CLI.getN(), 1)
  })

  it('Gives a letter rather than a number',function(){
    expect(
      function(){
        CLI.loadFlags(["node","index.js","-n","a"])
        CLI.getN()
      }).to.throw("You entered a non-numeric value")
  })

  it('Give a multidigit number',function(){
    CLI.loadFlags(["node","index.js","-n","9999"])
    assert.equal(CLI.getN(),9999)
  })

  it('A negative number',function(){
    expect(
      function(){
        CLI.loadFlags(["node","index.js","-n","-10"])
        CLI.getN()
      }).to.throw("N must be at least 1")
  })

  it('Given N=0',function(){
    expect(function(){
      CLI.loadFlags(["node","index.js","-n","0"])
      CLI.getN()
    }).to.throw("N must be at least 1")
  })

  it('N not being a whole number',function(){
    expect(function(){
      CLI.loadFlags(["node","index.js","-n","1.1"])
      CLI.getN()
    }).to.throw("N must be a whole number")
  })
})

describe('Table Generation',function(){
  it('Making sure the prime table is the correct size',function(){
    //We are going to check the size of the first 20 tables
    for(var i=1; i<21; i++){
      //Check the X length first
      var rawTable = PrimeTable.generatePrimeTable(i);
      assert.equal(rawTable.length,i+1)

      //Check each Y length
      for(var j=0;j<rawTable.length;j++){
        assert.equal(rawTable[j].length,i+1)
      }
    }
  })

  it('Making sure every number on the inner table is not prime',function(){
    var rawTable = PrimeTable.generatePrimeTable(100);
    for(var i=1;i<rawTable.length;i++){
      for(var j=1;j<rawTable[i].length;j++){
        assert.equal(isPrime(rawTable[i][j]),false)
      }
    }
  })
})

describe('Prime Generation',function(){
  it('Check the list of primes is the correct length',function(){
    assert.equal(PrimeTable.generatePrimeList(10).length, 10)
    assert.equal(PrimeTable.generatePrimeList(1).length, 1)
    assert.equal(PrimeTable.generatePrimeList(99).length, 99)
  })

  it('Check that the list is in ascending order',function(){
    var rawList = PrimeTable.generatePrimeList(100);
    var lowest = rawList[0]
    for(var i=1;i<rawList.length;i++){
      assert.equal((lowest<rawList[i]),true)
      lowest = rawList[i]
    }
  })

  it('Make sure everything in the list is prime',function(){
    var rawList = PrimeTable.generatePrimeList(100);
    for(var i=0;i<rawList.length;i++){
      assert.equal(isPrime(rawList[i]),true)
    }
  })

  it('Make sure no primes are missed(brute force)',function(){
    var rawList = PrimeTable.generatePrimeList(100);
    var counter = 0
    for(var i=0;i<rawList[rawList.length-1];i++){
      if(isPrime(i)){
        assert.equal(i,rawList[counter])
        counter++
      }
    }
  })
})
