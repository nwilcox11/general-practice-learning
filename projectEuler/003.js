'use strict';
/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

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

const factors = (n) => {
  // I know the prime factor will not be larger than the sqrt of the number
  let smallerNum = Math.floor(Math.sqrt(n));

  for (let i = 2; i < smallerNum; i++) {
    if(n % (smallerNum - i) === 0 && isPrime(smallerNum - i)) {
      return smallerNum - i;
    }
  }
};

// const greatest = (prev, curr) => {
//   return prev > curr ? prev : curr;
// };

// const factors = (num) => {
//   let normalizedNum = Math.floor(Math.sqrt(num));
//   let divisor = 2, factors = [];
//
//   while(divisor <= normalizedNum) {
//     if(normalizedNum % divisor === 0) {
//       factors.push(divisor);
//     }
//     divisor++;
//   }
//   return factors
//     .filter(isPrime)
//     .reduce(greatest);
// };

console.log(factors(600851475143));
// 6857
