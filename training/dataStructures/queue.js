/**
 * FIFO, Items entered at the end of the Queue
 * **/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    enqueue(value) {
        const node = new Node(value);
        /** if there are nodes in the list **/
        if (this.head) {
            /** add the new node to the end of this list **/
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    dequeue() {
        /** if head is null queue is empty, set tail to null **/
        if(!this.head) {
            this.tail = null;
            return;
        }
        /** grab the value at the head **/
        const value = this.head.value;
        /** set current head to the next value **/
        this.head = this.head.next;
        this.length--;
        return value;
    }
    peek() {
        return this.head.value;
    }
}

module.exports = Queue;
