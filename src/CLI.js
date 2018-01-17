/*
  This function returns the N given in the command line interface
  This function is resposible giving a default value and raising errors
*/
function getN(){
  return process.argv[2]
}

module.exports = {
  getN
}
