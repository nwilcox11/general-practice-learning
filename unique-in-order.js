'use strict';

// Implement the function unique_in_order which takes as argument a sequence
// and returns a list of items without any elements with the same value next to each other
// and preserving the original order of elements.

// First I check the input, if its a string call Array.prototype.split('').
// Next, loop through the input look for the last element of the repeated segments.
// Push this element onto the return array.

const uniqueInOrder = (iterable) => {
  let ret = [],
      normIterable = typeof iterable === 'string' ? iterable.split('') : iterable,
      len = normIterable.length;

  for(let i = 0; i < len; i++) {
    if(normIterable[i] !== normIterable[i+1]) {
      ret.push(normIterable[i]);
    }
  }
  return ret;

};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder([1,2,2,3,3]));
