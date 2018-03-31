/**
 * Stack is a linear data structure, LIFO
 * push - O(1)
 * pop - O(1)
 * peek - O(1)
 * **/
class Stack {
    constructor() {
        this.memory = {};
        this.position = -1;
    }
    /** adding an item to the stack **/
    push(value) {
        this.position++;
        this.memory[this.position] = value;
        return this;
    }
    /** removing item from top of stack **/
    pop() {
        const popped = this.memory[this.position];
        delete this.memory[this.position];
        this.position--;
        return popped
    }
    /** view item at top of stack without removing it **/
    peek() {
        return this.memory[this.position];
    }
}

module.exports = Stack;