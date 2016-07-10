'use strict';

// Find the difference between the sum of the squares of the first one hundred
// natural numbers and the square of the sum.

const squareIt = (n) => {
  return n * n;
};

const squareOfSum = (max) => {
  let sum = 0, sumSq = 0;

  for(let i = 1; i <= max; i++) {
    sum += i;
  }
  sumSq = squareIt(sum);

  return sumSq;
};

const sumOfSquares = (max) => {
  let sum = 0;

  for(let i = 1; i <= max; i++) {
    sum += squareIt(i);
  }
  return sum;
};

const solution = (squareOfSumMax, sumOfSquaresMax) => {
  return squareOfSum(squareOfSumMax) - sumOfSquares(sumOfSquaresMax);
};

console.log(solution(10,10));
// 25164150
