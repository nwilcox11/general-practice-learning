'use strict';

/*
Given an array of numbers, sort them in such a manner that all the odd numbers in the array are sorted in ascending order and the even numbers are sorted in descending order after the last odd number.
For example [1,2,3,4,5,6,7,8,9] produces the output [1,3,5,7,9,8,6,4,2].
If the array contains decimals, round them down while checking for odd/even.
The output must have the original numbers!
*/

// https://www.codewars.com/kata/sorting-the-odd-way/javascript

// Two solutions, one without filter, one with

function isEven(n) {
  let num = Math.floor(n);
  return num % 2 === 0;
}

function isOdd(n) {
  let num = Math.floor(n);
  return num % 2 !== 0;
}

function desc(a, b) {
  return b - a;
}

function asc(a, b) {
  return a - b;
}

function sortItOut(array) {
  let even = [];
  let odd = [];

  array.forEach(n => isEven(n) ? even.push(n) : odd.push(n));

  let decEven = even.sort(asc);
  let sortOdd = odd.sort(desc);

  return odd.concat(decEven);
}

function filterSort(array) {
  return array.filter(isOdd).sort(asc)
    .concat(array.filter(isEven).sort(desc));
}
let test = [11,22,33,44,55,55,90.4,4,78];
console.log(filterSort(test)); //=> [ 11, 33, 55, 55, 90.4, 78, 44, 22, 4 ]
