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
You can output only the primes by doing
```
node index.js -n <n> -p
```
You can see the command line flags and arguments you can use by doing
```
node index.js -h
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
In order to use the Sieve of Eratosthenes you have to generate the Nth prime which can be done using Prime Theory. I followed equations using prime theory. [Reference](https://math.stackexchange.com/questions/803935/how-do-we-prove-p-n-sim-n-logn-logn-from-the-prime-number-theorem?rq=1).

## Problems I encountered
During my project I ran into a few challenges:
* I was originally storing the multiplication table but I was hitting memory limits so I stopped storing it and just outputted it from the list of primes.
* I was treating n as an int so when i did n+1 it appended a 1 causing the computation to be much bigger than it needed to be

## What I am pleased with
Aspects of the project I am proud of:
* The unit tests I wrote before I built the prime generation
* The sieve of Eratosthenes implementation
* Adding TravisCI builds to track my build status
* The general structure of the project
* Being able to generate 999,999 primes in 1416ms
* The outputting being a simple extensible design

## What I would do with more time
If I had more time I would:
* Add prime caching
* Run a segmented sieve so more numbers can be calculated before running out of memory
* Add more output options

## Space/Time Complexities
Memory complexity is based upon the sieve algorithm which stores an array of size
```O((n+1)log((n+1)log((n+1))))```. When n is the number of primes we aim to generate. This equation is used to calculate the upperBound of the sieve.

The time complexity of the sieve is ```O(n log(log(n)))``` when n is the upper bound of the sieve. There is also an added time complexity of outputting the numbers which is O(n<sup>2</sup>). This could be reduced by not doing multiples twice but this would require storing half the multiples which dramatically increases the space complexity so isn't worth it.
