'use strict';

/*
Your goal in this kata is to implement an difference function,
which subtracts one list from another.

It should remove all values from list a, which are present in list b.
*/



const arrayDiff = (a, b)=> {
  return a.filter((x) => b.indexOf(x));
};

console.log(arrayDiff([1,2],[1])); // => [2]
