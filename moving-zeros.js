'use strict';

// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

// http://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

// Loop through array, if element is a zero, splice it and push onto array.

const moveZeros = function (array) {
  array.forEach((elem) => {
    if(elem === 0) {
      array.splice(array.indexOf(elem), 1);
      array.push(elem);
    }
  });
  return array;
};


console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])); // => [false,1,1,2,1,3,"a",0,0]
