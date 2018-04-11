const Queue = require('./queue');

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
            this.root = new Node(value);
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
    recurAdd(value) {
        /** base case -- the is no node in the current position **/
        if(!this.root) {
            this.root = new Node(value);
            return this;
        }
        return this.insertNode(this.root, value);
    }
    insertNode(currentNode, value) {
        /** if value to add is greater than current node **/
        if (value > currentNode.value) {
            /** we go right **/
            if (!currentNode.right) {
                /** if there is no right node, set new node to the right child **/
                currentNode.right = new Node(value);
                return this;
            }
            /** else recurse down to the right subtree **/
            return this.insertNode(currentNode.right, value);
            /** if value to add is less than current Node **/
        } else if (value < currentNode.value) {
            /** we go left **/
            if (!currentNode.left) {
                /** if there is no left node, set new node to the left child **/
                currentNode.left = new Node(value);
                return this;
            }
            /** else recurse down the left subtree **/
            return this.insertNode(currentNode.left, value);
        } else {
            /** value is equal to currentNode, do nothing **/
            return this;
        }
    }
    /**
     * Deleting a node with no children: simply remove the node from the tree.
     * Deleting a node with one child: remove the node and replace it with its child.
     * Deleting a node with two children: call the node to be deleted D. Do not delete D. 
     * Instead, choose either its in-order predecessor node or its in-order successor node as replacement node E. 
     * Copy the user values of E to D.[note 2] If E does not have a child simply remove E from its previous parent G. 
     * If E has a child, say F, it is a right child. Replace E with F at E's parent.
     * **/
    delete(value) { }
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
    /** add values to the array by level
     * we use a queue inorder to store references to the children of each node 
     * Beacuse queue are FIFO we can visit the nodes at each level in order **/
    breadthFirstTraverse() {
        if (!this.root) {
            return;
        }
        let queue = new Queue();
        let array = [];
        queue.enqueue(this.root);
        while(queue.length) {
            let current = queue.dequeue();
            if (current.left) {
                queue.enqueue(current.left)
            }
            if (current.right) {
                queue.enqueue(current.right)
            }
            array.push(current.value);
        }
        return array;
    }
}

module.exports = BinarySearchTree;