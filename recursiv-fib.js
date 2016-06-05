'use strict';

// You have to create the function fibonacci that receives n and returns f(n).
// You have to use recursion.

// http://www.codewars.com/kata/569512b7707bc1b88200002f/train/javascript

const fibonacci = (n) => {
  if (n === 0){
    return 0;
  }
  else if (n === 1) {
    return 1;
  }
  else {
    return fibonacci(n - 2) + fibonacci (n - 1);
  }
};

console.log(fibonacci(12));
