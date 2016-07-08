'use strict';
/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square, than -1 should be returned.
You may assume the parameter is positive.
*/

// http://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
// http://betterexplained.com/articles/surprising-patterns-in-the-square-numbers-1-4-9-16/

function findNextSquare(sq) {
  if(Math.floor(Math.sqrt(sq)) * Math.floor(Math.sqrt(sq)) === sq) {
    let square = Math.sqrt(sq);
    let difference = (square * 2) + 1;

    return sq + difference;

  } else {
    return -1;
  }
}

// quick refactor

// Because we are checking for a perfect square, we can eliminate the expensive, wrapping if statement.
// Check if the square root of the input is a whole number, does it divide evenly by one?
// We then know the next perfect square will be the ^2 of sq + 1.
// I avoided Math.pow(sq + 1, 2);  Not sure if (sq + 1) * (sq * 1) is more efficient.

function findNextSquare(sq) {
  sq = Math.sqrt(sq);

  return sq % 1 === 0 ? (sq + 1) * (sq + 1) : -1;
}



console.log(findNextSquare(121)); // => 144
console.log(findNextSquare(114)); // => -1, 114 is not perfect
console.log(findNextSquare(625)); // => 676
console.log(findNextSquare(319225)); // => 320356
