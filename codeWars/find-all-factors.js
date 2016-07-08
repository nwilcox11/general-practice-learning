'use strict';

// Create a function that takes a number and finds the factors of it,
// listing them in descending order in an array.
//
// If the parameter is not an integer or less than 1,
// return -1. In C# return an empty array.

// https://www.codewars.com/kata/564fa92d1639fbefae00009d/train/javascript


const factors = (x) => {
  let facts = [];

  if(!Number.isInteger(x) || x < 1) {
    return -1;
  }

  for(let i = 1; i <= x; i++) {
    if(x % i === 0) {
      facts.push(i);
    }
  }
  return facts.sort((a,b) => b - a);
};

console.log(factors(63));  // => [54, 27, 18, 9, 6, 3, 2, 1];
console.log(factors(-78)); // => -1
console.log(factors(20.5)); // => -1
