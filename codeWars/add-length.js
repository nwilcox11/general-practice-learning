'use strict';

// Your task is to write a function that takes a String and returns an
// Array/list with the length of each word added to each element .
//
// Note: String will have at least one element; words will always be separated by a space.

// http://www.codewars.com/kata/559d2284b5bb6799e9000047


// simple kata, one line of code.

const addLength = (str) => {
  return str.split(' ').map((word) => word + ' ' + word.length);
};

console.log(addLength('apple ban')); // => ["apple 5", "ban 3"]
