'use strict';

/*
Add all numbers up to a givin input.
Adds an array property directly to the function.
The memo is saving numbers through each invocation of the function.
If we run the function with a value that has already been calculated and stored in the memo array,
The function will save itself work and use that value.
If not, it will save itself as much work as possible, and use the closest value from the memo array
and execute from that point.
*/

function addAll (number) {
  // adding property directly to the function
  addAll.memo = addAll.memo || [0];
  let total = 0;
  // checks to see if input in the memo array.
    if(number < addAll.memo.length) {
  // sets total to value from memo array
      total = addAll.memo[number];
    } else {
  // sets total to last number in memo array, starts calculating from there
        total = addAll.memo[addAll.memo.length - 1];
      for(let i = addAll.memo.length; i <= number; i++) {
        total += i;
        addAll.memo.push(total);
      }
    }

  return total;
}

console.log(addAll(10));
console.log(addAll(11));
