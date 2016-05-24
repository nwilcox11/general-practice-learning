'use strict';

// Write a function toWeirdCase that accepts a string,
// and returns the same string with all even indexed characters in each word upper cased,
// and all odd indexed characters in each word lower cased.
// The indexing just explained is zero based, so the zero-ith index is even,
// therefore that character should be upper cased.

// The passed in string will only consist of alphabetical characters and spaces(' ').
// Spaces will only be present if there are multiple words.
// Words will be separated by a single space(' ').

// http://www.codewars.com/kata/52b757663a95b11b3d00062d

// Split on the space,
// call map and split each word
// map takes the element as well as the index, check if the index is even
// join both

const toWeirdCase = (string) => {
 return string.split(' ')
       .map((word) => word.split('')
       .map((l, i) => i % 2 === 0 ? l.toUpperCase() : l.toLowerCase())
       .join('')).join(' ');
};


console.log(toWeirdCase('String')); // => StRiNg
console.log(toWeirdCase('Weird string case')); // => WeIrD StRiNg CaSe
