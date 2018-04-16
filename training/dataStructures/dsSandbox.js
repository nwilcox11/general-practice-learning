const BinarySearchTree = require('./binarySearchTree');
const assert = require('assert');

let tree = new BinarySearchTree();
tree.add(8)
    .add(4)
    .add(13)
    .add(2)
    .add(6)
    .add(14)
    .add(5)
    .add(15)
    .add(1)
    .add(10)
    .add(11)

let preorderTraverse = tree.preorderTraversal(tree.root);
let inorderTraverse = tree.inorderTraversal(tree.root);
let postorderTraverse = tree.postorderTraversal(tree.root);
let breadthFirstTraverse = tree.breadthFirstTraverse(tree.root);

assert.deepEqual(preorderTraverse, [8, 4, 2, 1, 6, 5, 13, 10, 11, 14, 15]);
assert.deepEqual(inorderTraverse, [1, 2, 4, 5, 6, 8, 10, 11, 13, 14, 15]);
assert.deepEqual(postorderTraverse, [1, 2, 5, 6, 4, 11, 10, 15, 14, 13, 8]);
assert.deepEqual(breadthFirstTraverse, [8, 4, 13, 2, 6, 10, 14, 1, 5, 11, 15]);