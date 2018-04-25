const Queue = require('./queue');
const Stack = require('./stack');

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
    delete(value) {
        if (!this.root) {
            return;
        }
        let current = this.root;
        let previous;
        while(current) {
            if (value > current.value) {
                previous = current;
                current = current.right;
            } else if (value < current.value) {
                previous = current;
                current = current.left;
            } else { // we have found the element
                /** if element to delete has zero children remove reference to node **/
                if (!current.right && !current.left) {
                    if (previous.left && previous.left.value === value) {
                        previous.left = null;
                    } else if (previous.right && previous.right.value === value) {
                        previous.right = null;
                    }
                    return;
                    /** if element to delete has one child **/
                } else if ((current.right && !current.left) || (!current.right && current.left)) {
                    /** if one right child **/
                    if (current.right && !current.left) {
                        /** if the right child of the previous element is the element to be removed **/
                        if (previous.right && previous.right.value === current.value) {
                            /** set the right child of the previous element to right child of the element to be removed **/
                            previous.right = current.right;
                        } else {
                            /** we are replacing the left child of the previous element, 
                             * set the right child of the element to be removed to the left previous child **/
                            previous.left = current.right;
                        }
                    }
                    /** if one left child **/
                    if (!current.right && current.left) {
                        /** if the left child of the previous element is the element to be removed **/
                        if (previous.left && previous.left.value === current.value) {
                            /** set the left child of the previous element to the left child of the element to be removed **/
                            previous.left = current.left
                        } else {
                            /** we are replacing the right child of the previous element **/
                            previous.right = current.left;
                        }
                    }
                    return;
                } else if (current.right && current.left) {
                    /** find the min node in the right subtree of node to be deleted and cache reference to it
                     * ( node's in-order successor is its right subtree's left-most child ) **/
                    let minNode = this.findMinNode(current.right);
                    /** recursively call delete on the minimum node to remove it.  This min node will either have no children or one child
                     * we can call our delete recursivly to remove it based on the above conditions **/
                    this.delete(minNode.value)
                    /** set the node to remove's value to the minimum nodes value **/
                    current.value = minNode.value;
                }
                return;
            }
        }
        return
    }
    /** finds min node in right subtree **/
    findMinNode(rightSubTreeRoot) {
        let minNode = rightSubTreeRoot;
        while (minNode.left) {
            minNode = rightSubTreeRoot.left;
        }
        return minNode;
    }
    /** depth first traversals **/
    /** Traverse tree in order, we process the node we are currently on then move to its children 
     * Deep copy of BST, process node, then its children **/
    preorderTraversal(node, array = []) {
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
    inorderTraversal(node, array = []) {
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
    postorderTraversal(node, array = []) {
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
    breadthFirstTraverse(node) {
        if (!node) {
            return;
        }
        let queue = new Queue();
        let array = [];
        queue.enqueue(node);
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

function isValid(node, minVal, maxVal) {
    if (!node) {
        return true;
    }
    if (node.value < minVal || node.value > maxVal) {
        return false;
    }
    /**
     * if node is left child of parent, it must be smaller than its parent.  It must pass down the value of its parent to the right subtree to make sure none
     * of the nodes in that subtree are greater than the parent.
     * 
     * if node is the right child of parent it must be greater than its parent. It must pass down the value of its parent to the left subtree to make sure none
     * of the nodes in that subtree are lesser than the parent.
     * **/
    return isValid(node.left, minVal, node.value) && isValid(node.right, node.value, maxVal);
}

module.exports = {
    BinarySearchTree,
    isValid
};