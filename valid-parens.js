'use strict';

// Write a function called validParentheses that takes a string of parentheses,
// and determines if the order of the parentheses is valid.
// validParentheses should return true if the string is valid, and false if it's invalid.

// https://www.codewars.com/kata/52774a314c2333f0a7000688

// Very similar to valid braces

const validParentheses = (parens) => {
  let stack = [],
    hold = {'(':')'},
    len = parens.length,
    last;

  for(let i = 0; i < len; i++) {
    if(parens[i] === '(') {
      stack.push(parens[i]);
    } else {
      last = stack.pop();

      if(parens[i] !== hold[last]) {
        return false;
    }
    }
  }
  return stack.length === 0 ? true : false;
};

console.log(validParentheses('()'));
console.log(validParentheses('())'));
