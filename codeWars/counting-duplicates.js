'use strict';

// Write a function that will return the count of distinct case-insensitive alphabetic characters
// that occur more than once in the given string.
// The given string can be assumed to contain only uppercase and lowercase alphabets.

// First I chose to normalize the input.
// Then I mapped the input to the holder object, keeping track of how many time seach letter appeared
// Then I looped through the keys of the holder object, checking to see which key had a value greater than 1.

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
