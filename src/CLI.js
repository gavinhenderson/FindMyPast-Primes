/*
  This function returns the N given in the command line interface
  This function is resposible giving a default value and raising errors
*/
function getN(argv){
  return argv[2]
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
  outputType
}
