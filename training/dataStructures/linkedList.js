class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    contains(value) {
        if (!this.head) {
            return false;
        }
        let current = this.head;
        while(current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    insertAtHead(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.length++;
            return this;
        }
        /** set node.next to the rest of the list, so we don't loose it **/
        node.next = this.head;
        this.head = node;

        this.length++;
        return this;
    }
    insertAtEnd(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.length++;
            return this;
        }
        let current = this.head;
        /** find the last element (element with a null .next) **/
        while(current.next) {
            current = current.next;
        }
        current.next = node;
        this.length++;
        return this;
    }
    insertAfter(prevValue, value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.length++;
            return this;
        }
        let previous = this.head;
        while(previous && previous.value !== prevValue) {
            previous = previous.next;
        }
        node.next = previous.next;
        previous.next = node;
        this.length++;
        return this;
    }
    removeNth(pos) {
        if (pos > this.length) {
            throw 'Out of bounds';
        }
        if (pos === 0) {
            this.head = this.head.next;
            return this;
        }
        let current = this.head;
        let previous = null;
        let index = 0;
        while(pos !== index) {
            previous = current;
            current = current.next;
            index++;
        }
        previous.next = current.next;
        this.length--;
        return this;
    }
    // find the node n positions from the end
    findNthFromLast(n) {
        if (n > this.length) {
            throw 'Out of bounds';
        }
        const nth = (this.length - n);
        let current = this.head;
        let previous = null;
        let index = 0;
        while(nth !== index) {
            current = current.next;
            index++;
        }
        return current;
    }

    deleteNode(value) {
        // if value is head
        if (this.head.value === value) {
            this.head = this.head.next;
            return this;
        }
        let current = this.head;
        let previous = null;
        while(current) {
            if (current.value === value) {
                previous.next = current.next
                this.length--;
                return this;
            }
            previous = current;
            current = current.next;
        }
        return 'Node not found';
    }
}

module.exports = LinkedList;