'use strict';

// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, and u as vowels for this Kata.

// http://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

const getCount = (str) => {
  let count = 0,
    vowels = ['a','e','i','o','u'],
    arrStr = str.split('');

  arrStr.map((c) => {
    vowels.map((v) => {
      if(c === v) {
        count++;
      }
    });
  });
  return count;
};

console.log(getCount('my name is nick')); // => 4
