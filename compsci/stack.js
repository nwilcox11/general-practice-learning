'use strict';

/*
Last In, First Out data structure
*/

class Stack {
  constructor() {
    this.size = 0;
    this.storage = {};
  }
  add(value) {
    // adds a value to the end of a list
    let size = this.size++; // increase list size
    this.storage[size] = value; // set value to end of the list

    return this; // return this to allow for method chaining
  }
  remove() {
    let target = this.size - 1;
    let deleted;
    // if there are items in the stack
    if(this.size) {
      deleted = this.storage[target];
      delete this.storage[target];

      this.size--; // reduce the size of stack;
    }
    return deleted;
  }
}

const s2 = new Stack;
s2.add('a').add('b').add('c').add('d');
console.log(s2.remove());
console.log(s2);
