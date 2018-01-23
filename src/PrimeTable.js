//Generate n number of primes
function generatePrimeList(n){
  //Estimation doesnt work when given 1 so we catch the edge case
  if(n===1){
    return [2]
  }

  //https://math.stackexchange.com/questions/1586878/get-from-prime-number-theorem-to-the-approximate-equality-of-nth-prime-to-nlogn
  //https://math.stackexchange.com/questions/803935/how-do-we-prove-p-n-sim-n-logn-logn-from-the-prime-number-theorem?rq=1
  //Estimating the nth term taken from stack overflow
  //n = n * Math.log(n*Math.log(n))
  n = parseInt(n)
  var upperBound = (n+1) * Math.log((n+1)*Math.log((n+1)))

  //Let A be an array of Boolean values, indexed by integers 2 to n, initially all set to true.
  var A = []
  for(var i=2;i<upperBound;i++){ A[i] = true }

  //for i = 2, 3, 4, ..., not exceeding √n:
  for(var i=2; i<Math.sqrt(upperBound); i++){
    //if A[i] is true:
    if(A[i]){
      //for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n:
      for(var j=i*i; j<upperBound; j+=i){
        //A[j] := false.
        A[j] = false
      }
    }
  }

  //extract all the primes from the list
  var PrimeList = []
  for(var i=0;i<A.length;i++){
    if(A[i]){
      PrimeList.push(i)
    }
  }

  //in some cases we generate more primes than needed so we only return the ones we want
  return PrimeList.slice(0,n)
}

module.exports = {
  generatePrimeList
}
