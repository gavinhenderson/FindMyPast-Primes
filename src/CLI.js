/* Use commander for ease of interfacing with CLI flags */
var program = require('commander')

//We are going to use n as the default n
var n = 3

//Makes sure that n is valid
function setN(val){
  if(isNaN(val)){
    throw new Error('You entered a non-numeric value')
  }else if(val<1){
    throw new Error('N must be at least 1')
  }else if(!(val % 1 === 0)){
    throw new Error('N must be a whole number')
  }else{
    n = val
  }
}

/* Use commanded to get the info from the CLI */
function loadFlags(argv){
  program
  .version('0.1.0')
  .option('-n, --number <n>', 'An integer argument', setN)
  .option('-c, --csv','Output table to table.csv')
  .option('-p, --primes','Only output the primes')
  .parse(argv);
}

/* Returns n */
function getN(){
  return n
}

/* Finds out if user wants output in CSV */
function getCSV(){
  return program.csv
}

//Finds out if the user only wants the Primes
function getPrintPrime(){
  return program.primes
}

module.exports = {
  getN,
  loadFlags,
  getCSV,
  getPrintPrime
}
