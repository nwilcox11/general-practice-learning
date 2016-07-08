'use strict';

/*
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately,
starting with the leftmost digit and skipping any 0s.
So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII).
The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
*/

// solution('XXI'); // should return 21

// http://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript



const solution = (roman) => {
  const rSplit = roman.split(''),
    numerals = {
      'M': 1000,
      'D': 500,
      'C': 100,
      'L': 50,
      'X': 10,
      'V': 5,
      'I': 1,
      };

    return rSplit.map((char) => numerals[char])
                 .reduce((p, c, i, rSplit) => p + ((rSplit[i+1] > c) ? -c : c));

};

console.log(solution('MCMXLIV')); // => 1944
console.log(solution('XXI')); // => 21
console.log(solution('IV')); // => 4
