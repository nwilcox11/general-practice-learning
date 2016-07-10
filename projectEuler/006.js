'use strict';

// Find the difference between the sum of the squares of the first one hundred
// natural numbers and the square of the sum.

const squareIt = (n) => {
  return n * n;
};

const squareOfSum = () => {
  let sum = 0, sumSq = 0;

  for(let i = 1; i <= 100; i++) {
    sum += i;
  }
  sumSq = squareIt(sum);

  return sumSq;
};

const sumOfSquares = () => {
  let sum = 0;

  for(let i = 1; i <= 100; i++) {
    sum += squareIt(i);
  }
  return sum;
};

const solution = () => {
  return squareOfSum() - sumOfSquares();
};

console.log(solution());
// 25164150
