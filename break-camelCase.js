'use strict';

// Complete the solution so that the function will break up camel casing,
// using a space between words.

// http://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript


const solution = (string) => {
  return string.split('')
               .map((a) => a === a.toUpperCase() ? ' ' + a : a)
               .join('');
};

// Using regex
const sol = (string) => {
  return string.replace(/([a-z])([A-Z])/g, '$1 $2');
};

console.log(solution('camelCasing')); // => 'camel Casing'
console.log(sol('camelCasing')); // => 'camel Casing'
