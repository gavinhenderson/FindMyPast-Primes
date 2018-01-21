var CLI = require('./src/CLI.js')
var Output = require('./src/Output.js')
var PrimeTable = require('./src/PrimeTable.js')

CLI.loadFlags(process.argv)
var n = CLI.getN(process.argv)
var primeTable = PrimeTable.generatePrimeTable();
Output.commandLine(primeTable)
