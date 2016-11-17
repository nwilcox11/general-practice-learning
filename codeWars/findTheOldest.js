'use strict';

/*
You will be given an array of objects representing data about developers who
have signed up to attend the next coding meetup that you are organising.

Your task is to return an array which includes the developer who is the oldest.
In case of a tie, include all same-age senior developers listed in the same order
as they appeared in the original input array.
*/

/*
https://www.codewars.com/kata/coding-meetup-number-7-higher-order-functions-series-find-the-most-senior-developer/
train/javascript
*/

// find the highest age
function getMaxAge(arrayOfDevs) {
  let maxAge = arrayOfDevs[0].age;
  for(let i = 0; i < arrayOfDevs.length; i++) {
    if(arrayOfDevs[i].age > maxAge) {
      maxAge = arrayOfDevs[i].age;
    }
  }
  return maxAge;
}
// filter the list based on the highest age
function findSenior(list) {
  let maxAge = list.reduce(reducer);
  return list.filter(dev => dev.age === maxAge);
}
