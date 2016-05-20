'use strict';

// Write a function that will return the count of distinct case-insensitive alphabetic characters
// that occur more than once in the given string.
// The given string can be assumed to contain only uppercase and lowercase alphabets.

const duplicateCount = (string) => {
  let holder = {},
    normal = string.toLowerCase().split(''),
    ret = [];

  normal.map(s => holder[s] ? holder[s]++ : holder[s] = 1);

  for(let key in holder) {
    if(holder[key] > 1) {
      ret.push(key);
    }
  }
  return ret.length;
};

duplicateCount("abcde"); // => 0
duplicateCount("aabbcde"); // => 2
duplicateCount("aabBcde"); // => 2
duplicateCount("Indivisibility"); // => 1
duplicateCount("Indivisibilities"); // => 2
