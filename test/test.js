var assert = require('assert');
var CLI = require('./../src/CLI.js')
var PrimeTable = require('./../src/PrimeTable.js')
var chai = require('chai')
var expect = chai.expect;

describe('Initial Test', function() {
  it('This should always pass, here just to make sure the tests are running', function() {
      assert.equal(1,1);
  });
});

describe('Extract given N', function() {

  it('No flags given',function() {
    assert.equal(CLI.getN(["node","index.js","1"]), 1)
  })

  it('Gives a letter rather than a number',function(){
    expect(
      function(){
        CLI.getN(["node","index.js","a"])
      }).to.throw("You entered a non-numeric value")
  })

  it('Give a multidigit number',function(){
    assert.equal(CLI.getN(["node","index.js","9999"]),9999)
  })

  it('A negative number',function(){
    expect(
      function(){
        CLI.getN(["node","index.js","-10"])
      }).to.throw("N must be at least 1")
  })

  it('Given N=0',function(){
    expect(function(){
      CLI.getN(["node","index.js","0"])
    }).to.throw("N must be at least 1")
  })
})

describe('Testing the prime table',function(){
  it('Check the size of the table',function(){
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
})
