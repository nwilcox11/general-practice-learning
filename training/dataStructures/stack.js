/**
 * Stack is a linear data structure, LIFO
 * push - O(1)
 * pop - O(1)
 * peek - O(1)
 * **/
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    /** adding an item to the top of the stack **/
    push(value) {
        const node = new Node(value);
        /** setting node.next to the current head / rest of list **/
        node.next = this.head;
        /** replace current head with new node, inserting new node at head **/
        this.head = node;
        this.length++;
        return this;
    }
    /** removing item from top of stack **/
    pop() {
        /** if no head stack is empty, do nothing **/
        if (!this.head) {
            return;
        }
        const { value } = this.head;
        const { next } = this.head;
        this.head = next;
        this.length--;
        return value;
    }
    /** view item at top of stack without removing it **/
    peek() {
        return this.head.value;
    }
}

module.exports = Stack;