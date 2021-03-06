'use strict';

/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms.
By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence
whose values do not exceed four million,
find the sum of the even-valued terms.
*/

const fibo = (n) => {
  return (n === 1 || n === 2) ? n : fibo(n - 1) + fibo(n - 2);
};

const addEvenFibos = (max) => {
  let sum = 0, n = 1;

  while(fibo(n) < max) {
    if(fibo(n) < max && fibo(n) % 2 === 0) {
      sum += fibo(n);
    }
    n++;
  }
  return sum;
};

console.log(addEvenFibos(4000000));
