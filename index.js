var CLI = require('./src/CLI.js')
var Output = require('./src/Output.js')
var PrimeTable = require('./src/PrimeTable.js')

//Load flags and get N
CLI.loadFlags(process.argv)
var n = CLI.getN()

//Run the prime generation and time it
console.time("Prime Generation Time")
var primeList = PrimeTable.generatePrimeList(n);
console.timeEnd("Prime Generation Time")

//Output to table.csv
if(CLI.getCSV()){
  console.log()
  console.log("Outputting to table CSV......")
  console.log("Remember the space complexity is n^2")
  Output.CSV(primeList)
  console.log()
}else{
  //output to the command line
  Output.commandLine(primeList, true, function(){})
}
