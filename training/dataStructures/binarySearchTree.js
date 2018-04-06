class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    add(value) {
        /** if we have no root, set new value to root **/
        if (!this.root) {
            this.root = new Node(value);;
            return this;
        }

        let current = this.root;

        while(true) {
            /** if value is > current value we go right **/
            if (value > current.value) {
                /** if there is no right node, set current.right to node **/
                if(!current.right) {
                    current.right = new Node(value);
                    return this;
                }
                /** set current to right node and continue traversing **/
                current = current.right;
            /** if value is < current.value we go left **/    
            } else if (value < current.value) { 
                if(!current.left) {
                    current.left = new Node(value);
                    return this;
                }
                /** set current to left node and continue traversing **/
                current = current.left;
                /** if value is the same do nothing **/
            } else {
                return this;
            }
        }
    }
    /** depth first traversal **/
    preorderTraversal(node, array) {
        /** if we are at the end of a leaf with no children, return the array **/
        if (!node) {
            return array;
        }
        /** process node, then recursively move to the next **/
        array.push(node.value);
        /** process the left tree first **/
        array = this.preorderTraversal(node.left, array);
        /** then right tree **/
        array = this.preorderTraversal(node.right, array);
        return array;
    }
    delete() {}
}

module.exports = BinarySearchTree;