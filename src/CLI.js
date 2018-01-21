var program = require('commander')

var n = 3

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

function loadFlags(argv){
  program
  .version('0.1.0')
  .option('-n, --number <n>', 'An integer argument', setN)
  .parse(argv);
}

/*
  This function returns the N given in the command line interface
  This function is resposible giving a default value and raising errors
*/
function getN(){
  return n
}

/*
  This enum gives the possible output types
*/
var outputType = {
  RAW: 1,
  CSV: 2,
  HTML: 3,
  CLI: 4
};

/*
  This function will read the command line input and extract the chosen output type
  THis function is also resposible for giving errors and specifing a default output type
*/
function getOuptutType(argv){
  return outputType.RAW;
}

module.exports = {
  getN,
  outputType,
  loadFlags
}
