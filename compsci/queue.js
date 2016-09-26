'use strict';

/*
  First In, First Out FIFO
  First elememnt added will be the first element removed.
*/

class Queue {
  constructor() {
    this.oldestIndex = 1;
    this.newestIndex = 1;
    this.storage = {};
  }
  size() {
    return this.newestIndex - this.oldestIndex
  }
  add(value) {
    // use newestIndex as a key for the value being added, increment newestIndex
    this.storage[this.newestIndex] = value;
    this.newestIndex++;
    // allows for method chaining
    return this;
  }
  remove() {
    // remove oldest value, increase oldestIndex
    let deleteData;
    if(this.oldestIndex !== this.newestIndex) {
      deleteData = this.storage[this.oldestIndex];
      delete this.storage[this.oldestIndex];
      this.oldestIndex++;

      return deleteData;
    }
  }
}

const q1 = new Queue;
q1.add('a').add('b').add('c').add('d');
console.log(q1.remove());
console.log(q1);
