'use strict';

/*
LinkedList ->
  Made up of a bunch of nodes, each node has 2 properties, a VALUE and a POINTER to the next node.
  The first element is called the head, the last is the tail.

  Gets are expensive, because you must start at the head and traverse until you reach a desired index.
  Deletes are cheap (relatively), once you find the node to be removed, simply change the pointer.

  There are going to be three methods, a get, add and remove
*/

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }
  get(pos) {
    if(pos >= this.length) throw new Error('Position does not exist');

    let current = this.head;

    for(let i = 0; i < pos; i++) {
      current = current.next;
    }
    return current;
  }
  add(value, pos) {
    let node = new Node(value);
    // special case for nodes being inserted at the head
    if(pos === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      // new node needs to be put between current node and previous node
      let prev = this.get(pos - 1);
      let current = prev.next;
      // adding new node between them
      node.next = current;
      prev.next = node;
    }
    this.length++;
  }
  remove(pos) {
    if(pos === 0) {
      this.head = this.head.next;
    } else {
      // for anything else, we need to look up the previous node and change the pointer
      let prev = this.get(pos - 1);
      prev.next = prev.next.next;
    }
    this.length--;
  }
}

class Node {
  constructor(value) {
    this.value = value,
    this.next = null
  }
}
