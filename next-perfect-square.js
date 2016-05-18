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

console.log(findNextSquare());
