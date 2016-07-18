'use strict';

// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

const isPrime = (x) => {
  if (isNaN(x) || !isFinite(x) || x % 1 || x < 2) {
    return false;
  }

  let m = Math.sqrt(x);

  for (let i = 2; i <= m; i++) {
    if (x % i === 0) {
      return false;
    }
  }
 return true;
};

const primeSum = () => {
  let sum = 0;

  for(let i = 2; i <= 2000000; i++ ) {
    if(isPrime(i)) {
      sum += i;
    }
  }
  return sum;
};

console.log(primeSum());
// 142913828922
