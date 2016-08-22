'use strict';

// rotate array based on passed number of rotations

let arr = [1,2,3,4,5];

function rotateLeft(arr, rotations) {
  let copy = arr.slice(0); // do not mutate global array
  while(rotations > 0) {
    let picked = copy.shift(); // picks first element
    copy.push(picked); // pushes it on the end of the array
    rotations--;
  }
  return copy;
}

function rotateRight(arr, rotations) {
  let copy = arr.slice(0); // do not mutate global array
  while(rotations > 0) {
    let picked = copy.pop(); // picks last element
    copy.unshift(picked); // puts it on the front of the array
    rotations--;
  }
    return copy;
}

console.log(rotateLeft(arr, 3));
console.log(rotateRight(arr, 3));
console.log(arr);
