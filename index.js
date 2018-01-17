var CLI = require('./src/CLI.js')
var Output = require('./src/Output.js')
var PrimeTable = require('./src/PrimeTable.js')

var n = CLI.getN()
var primeTable = PrimeTable.generatePrimeTable();
Output.commandLine(primeTable)
