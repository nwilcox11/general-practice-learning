'use strict';

// Write a function to shuffle an array.

// Simple kata

// Using the fisher-yates shuffle
// Pick a random index, set current index to the random index.

// http://www.codewars.com/kata/shuffle-an-array-1/javascript

let numbers = [2,11,47,32];

const shuffle = (arr) => {
  let randomIndex, temp, len = arr.length;

  for(let i = 0; i < len; i++ ) {
    randomIndex = Math.floor(Math.random() * i);
    temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
  return arr;
};


console.log(shuffle(numbers));
