'use strict';

// Implement the function longest(array,n) where you will be given an array of strings
// and then return the nth longest string in
// that array. e.g. arr = ['Hello','World','Codewars','Katas'] n = 3;
// should return 'World' because 'Codewars' length = 8 ,
// 'Hello' length = 5, so that is the 2nd longest word and then
// 'World' (although also word length of 5, 'World' is after 'Hello' in the array).
// When words have the same lengths, treat them in the order in which they exist in the array.
// Array will never be empty and n > 0 always.


// http://www.codewars.com/kata/find-the-nth-longest-string-in-an-array/train/javascript

const swap = (items, firstIndex, secondIndex) => {
  let temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
};

const longest = (arr, n) => {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - 1; j++) {
      if(arr[j].length < arr[j + 1].length) {
        swap(arr, j, j+1);
      }
    }
  }
  return arr[n-1];
};

console.log(longest(['Hello','World','Codewars','Katas'],3)); // => world
console.log(longest(['Hello','World','Codewars','Katas'],4)); // => katas
console.log(longest(['aa', 'bb', 'cc', 'dd', 'eee', 'b', 'f', 'ff', 'hhh', 'gggg'],4)); // => 'aa'
