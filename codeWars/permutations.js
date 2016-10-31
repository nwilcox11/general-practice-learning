'use strict';

/*
In this kata you have to create all permutations of an input string and remove duplicates
This means, you have to shuffle all letters from the input in all possible orders.
*/

// https://www.codewars.com/kata/permutations/train/javascript

const test = 'aabb'; // => [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba']

function unqiue(value, index, array) {
  return array.indexOf(value) === index;
}

function permutations(string) {
  let result = [];
  // base case - if string is single char add to results
  if(string.length === 1) {
    result.push(string);
    return result;
  }

  for(let i = 0; i < string.length; i++) {
    let firstChar = string[i];
    let charsLeft = string.substring(0, i) + string.substring(1 + i);
    let innerPerms = permutations(charsLeft);
      for(let j = 0; j < innerPerms.length; j++) {
        result.push(firstChar + innerPerms[j]);
      }
  }
  return result.filter(unqiue); // returns unique array
  // return [... new Set(result)]; //  return unique array using set
}
