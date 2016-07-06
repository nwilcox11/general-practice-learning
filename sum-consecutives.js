'use strict';

/*
You are given a list/array which contains only integers (positive and negative).
Your job is to sum only the numbers that are the same and consecutive.
The result should be one list.

Extra credit if you solve it in one line.
You can asume there is never an empty list/array and there will always be an integer.
*/

// https://www.codewars.com/kata/sum-consecutives/train/javascript

const sumConsecutives = s => {
  let sum = 0, ret = [], len = s.length, i;

  for(i = 0; i < len; i++) {
    sum += s[i];
    if(s[i] !== s[i+1]) {
      ret.push(sum);
      sum = 0;
    }
  }
  return ret;
};

console.log(sumConsecutives([1,1,7,7,3])); // => [2,14,3]; 
