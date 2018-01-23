# FindMyPast-Primes [![Build Status](https://travis-ci.com/gavinhenderson/FindMyPast-Primes.svg?token=zGHzssRv4pwPdCHDq9fz&branch=master)](https://travis-ci.com/gavinhenderson/FindMyPast-Primes)
My attempt at the coding challenge issued by FindMyPast
## About
An application that takes in a number value from the user and will then output the multiplication table of prime numbers. The project will focus on using tests throughout the development. The project will be written using javascript.

## How to run it
You need it install all the the node modules. This can be done using the node package manager. To install the dependencies enter:
```
npm install
```
You can test that the code works by running the tests. The tests are written using Mocha, a node unit test framework. They can be run by simply entering:
```
npm tests
```
To run the program you must invoke the node script and then pass it a value for n. N must be a whole number that is one or greater. You start the script like so
```
node index.js -n <n>
```
If you want to export the table to a CSV file use the '-c' flag to export to table.csv. Usage is as follows:
```
node index.js -n <n> -c

```

## Test Coverage

1. Initial Test
  * This should always pass, here just to make sure the tests are running
2. Using CLI module to get user defined N
  * No flags given
  * Gives a letter rather than a number
  * Give a multidigit number
  * A negative number
  * Given N=0
  * N not being a whole number
3. Table Generation
  * Making sure the prime table is the correct size
  * Making sure every number on the inner table is not prime
4. Prime Generation
  * Check the list of primes is the correct length
  * Check that the list is in ascending order
  * Make sure everything in the list is prime
  * Make sure no primes are missed (brute force)

## Approach

To generate the prime numbers I used the Sieve of Eratosthenes which I found the pseudocode for. Below is the pseudocode I followed.
```
Input: an integer n > 1.

Let A be an array of Boolean values, indexed by integers 2 to n, initially all set to true.

for i = 2, 3, 4, ..., not exceeding √n:
  if A[i] is true:
    for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n:
      A[j] := false.

Output: all i such that A[i] is true.
 ```
In order to use the Sieve of Eratosthenes you have to generate the Nth prime which can be done using Prime Theory. I followed equations on [stackexchange](https://math.stackexchange.com/questions/803935/how-do-we-prove-p-n-sim-n-logn-logn-from-the-prime-number-theorem?rq=1).
