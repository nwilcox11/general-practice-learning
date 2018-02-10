'use strict';

// Find the difference between the sum of the squares of the first one hundred
// natural numbers and the square of the sum.

const squareIt = n => n * n;

const assembleSquares = max => {
  let squareOfSum = 0,
      sumOfSquares = 0;

  for(let i = 1; i <= max; i++) {
    squareOfSum += i;
    sumOfSquares += squareIt(i);
  }
  return squareIt(squareOfSum) - sumOfSquares;
};

console.log(assembleSquares(100));
// 25164150
