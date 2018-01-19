//Generate n number of primes
function generatePrimeList(n){
  return [2,3,5]
}

function generatePrimeTable(n){
  //The has default values for the purpose of this skeleton
  //Prime table is a 2D array
  var primeTable = [
    [,2,3,5],
    [2,4,6,10],
    [3,6,9,15],
    [5,10,15,25]
  ]

  return primeTable
}

module.exports = {
  generatePrimeTable,
  generatePrimeList
}
