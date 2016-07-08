'use strict';

// Simple one today...

// Code a function which will return an array with all prime numbers smaller
// than or equal to an arbitrary parameter "n".

// Assume that all parameters will be numbers.

// Remember that in some test cases with a big enough "n",
// performance might be (more) important.

// http://www.codewars.com/kata/56ce75f63ae564179200211c/train/javascript


// First wrote a function checking if prime.
// If prime, push to prime array.

// Could be more efficient, but gets the job done.

const isPrime = (n) => {
  if (n === 1) {return false;}

  for(let i = 2; i < n; i++) {
    if(n % i === 0) {
      return false;
    }
  }
  return true;
};

const primeArray = (n) => {
  let primeArray = [];

  for(let i = 1; i <= n; i++ ) {
    if(isPrime(i)) {
      primeArray.push(i);
    }
  }
  return primeArray;
};

console.log(primeArray(10));
