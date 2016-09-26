'use strict';

/*

The task here is to create a class that maintains a sorted list of numbers in ascending order.

The class will have two methods:

add(x) will add x to the list
get(i) will get the ith value in the list
You should also provide a length property that gives the length of the list.

Efficiency matters!

*/

class List {
  constructor() {
    this.length = 0;
    this.storage = [];
  }
  add(val) {
    // maintain sorted array while inserting random numbers
    let i = 0;
    // incrementing the i value until storage at index i is less than the value
    while(this.storage[i] < val) {
      i++;
    }
    // if a third parameter is supplied to splice it will insert
    // add the value at index i, delete 0 elements, insert val
    this.storage.splice(i,0,val);
    this.length++;
  }
  get(index) {
    return this.storage[index];
  }
}

const l1 = new List
l1.add(5);
l1.add(2);
l1.add(6);
l1.add(1);
console.log(l1);
