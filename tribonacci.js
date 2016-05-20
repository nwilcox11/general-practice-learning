'use strict';

// As the name may already reveal, it works basically like a Fibonacci,
// but summing the last 3 (instead of 2) numbers of the sequence to generate the next.

// Well, you may have guessed it by now, but to be clear:
// you need to create a fibonacci function that given
// a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number;
// if n==0, then return an empty array and be ready for anything else which is not clearly specified

// First I built the signature array by adding the previous 3 elements
// Then I returned signature.slice(0,n) inorder to handle n <= 1

const tribonacci = (signature, n) => {
  for(let i = 3; i < n; i++) {
    signature[i] = signature[i - 1] + signature[i - 2] + signature[i - 3];
  }
  return signature.slice(0,n);
};

console.log(tribonacci([1,1,1],10)); // => [1,1,1,3,5,9,17,31,57,105]
console.log(tribonacci([0,0,1],10)); // => [0,0,1,1,2,4,7,13,24,44]
console.log(tribonacci([0,1,1],10)); // => [0,1,1,2,4,7,13,24,44,81]
console.log(tribonacci([1,0,0],10)); // => [1,0,0,1,1,2,4,7,13,24]
console.log(tribonacci([0,0,0],10)); // => [0,0,0,0,0,0,0,0,0,0]
console.log(tribonacci([1,2,3],10)); // => [1,2,3,6,11,20,37,68,125,230]
console.log(tribonacci([0,0,0],10)); // => [3,2,1,6,9,16,31,56,103,190]
console.log(tribonacci([1,1,1],1)); // =>  [1]
console.log(tribonacci([300,200,100],0)); // => []
