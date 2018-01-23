var CLI = require('./src/CLI.js')
var Output = require('./src/Output.js')
var PrimeTable = require('./src/PrimeTable.js')

CLI.loadFlags(process.argv)
var n = CLI.getN()
var primeList = PrimeTable.generatePrimeList(n);
Output.commandLine(primeList, true, function(){})

if(CLI.getCSV()){
  console.log()
  console.log("Outputting to table CSV......")
  console.log("Remember the space complexity is n^2")
  Output.CSV(primeList)
  console.log()
}
