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
    /** depth first traversals **/
    /** Traverse tree in order, we process the node we are currently on then move to its children 
     * Deep copy of BST, process node, then its children **/
    preorderTraversal(node = this.root, array = []) {
        /** if we are at the end of a leaf with no children, return the array **/
        if (!node) {
            return array;
        }
        /** process node, then recursively move to the next **/
        array.push(node.value);
        /** process the left tree first **/
        this.preorderTraversal(node.left, array);
        /** then right tree **/
        this.preorderTraversal(node.right, array);
        return array;
    }
    /** process left subtree and then right subtree, returns sorted array 
     * Sorted List from BST**/
    inorderTraversal(node = this.root, array = []) {
        if (!node) {
            return array;
        }
        /** move to the left subtree first, we push onto the array when we reach a leaf node **/
        this.inorderTraversal(node.left, array);
        /** we do the processing of the node **/
        array.push(node.value);
        /** move to the right sub tree, repeat **/
        this.inorderTraversal(node.right, array);
        return array;
    }
    /** visits all children in left and right subtrees before processing nodes, root will always be last 
     * Deleting a BST, we process the children before the node itself
     * **/
    postorderTraversal(node = this.root, array = []) {
        if(!node) {
            return array;
        }
        this.postorderTraversal(node.left, array);
        this.postorderTraversal(node.right, array);
        array.push(node.value);
        return array;
    }
    delete() {}
}

module.exports = BinarySearchTree;