'use strict';

// A palindromic number reads the same both ways.
// The largest palindrome made from the product of
// two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

const isPalindrome = (num) => {
  let num2 = Number(num.toString().split('').reverse().join(''));
  return num === num2 ? true : false;
};

const findPalindrome = () => {
  let palindromes = [];

  // we only have to loop through the 900's because we know its going to be a higher numbers
  // a little cheecky... to save time

  for(let i = 999; i > 900; i--) {
    for(let j = 999; j > 900; j--) {
      let total = i * j;
      if(isPalindrome(total)) {
        palindromes.push(total);
      }
    }
  }
  return palindromes
    .reduce((prev, curr) => prev > curr ? prev : curr);
};

console.log(findPalindrome());
