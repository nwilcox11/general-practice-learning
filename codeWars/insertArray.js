'use strict';
/*
Extend the Array object with the function insert(index,value).
  This function must change the original array and insert
  the value at the given index in the array.

  constraints ->

    If the index is greater than the array's size, insert the value at the end.

    You must return the array to be able to chain the insert function call.

    You can use Array's built-in functions to help you.

    The 'insert' function must not be enumerable.
*/

// https://www.codewars.com/kata/insert-value-into-an-array/train/javascript

// insert logic
function insert(index, value) {
  this.splice(index, 0, value);
  return this;
}
// options object to be passed to Object.defineProperty to make insert inenumerable
const options = {
  enumerable: false,
  value: insert
};

Object.defineProperty(Array.prototype, 'insert', options);
