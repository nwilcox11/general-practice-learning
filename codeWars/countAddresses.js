'use strict';

/*

Write a function that can take an array of addresses as input, and return an array with the count of addresses for each state.

The input objects will have the following structure:

{
  house: 1234,
  street: "Lonely St.",
  city: "Soldotna",
  zipcode: 99669,
  state: "AK"
}

Returned objects must have the following structure:

{
  state: "AK",
  count: 25
}

*/

//https://www.codewars.com/kata/count-addresses-grouped-by-state/train/javascript

// returns an object counting occurrences of each state
function getStateCount(objectArray) {
  let stateCounts = {};

  objectArray.forEach((address) => {
    if(!address.state) throw new Error();
    if(stateCounts[address.state]) {
      stateCounts[address.state]++;
    } else {
      stateCounts[address.state] = 1;
    }
  });
  return stateCounts;
}

// returns array of objects with counts
function count(objArray) {
  let stateCounts = getStateCount(objArray);

  return Object.keys(stateCounts)
    .map((eachState) => {
      return {
        state: eachState,
        count: stateCounts[eachState]
      }
    })
  }
