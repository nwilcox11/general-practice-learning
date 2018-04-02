class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    enqueue(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }
    dequeue() {
        
    }
    peek() {
        
    }
}

module.exports = Queue;
