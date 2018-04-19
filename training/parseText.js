const fs = require('fs');

class Node {
    constructor(value) {
        // TODO: add line number
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class Tree {
    constructor() {
        this.root = null;
        this.length = 0;
    }
    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
            return this;
        } else {
            return this._add(this.root, value);
        }
    }
    _add(node, value) {
        if (value > node.value) {
            if (!node.right) {
                node.right = new Node(value);
                return this;
            }
            return this._add(node.right, value);
        } else if (value < node.value) {
            if (!node.left) {
                node.left = new Node(value);
                return this;
            }
            return this._add(node.left, value);
        } else {
            return this;
        }
    }
}

function logTree(tree) {
    console.log(JSON.stringify(tree, null, 4));
}

function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, file) => {
            err ? reject(err) : resolve(file);
        });
    });
}
function splitWords(file) {
    /** 
     * \w is any digit, letter, or underscore
     * \s is any whitespace
     * /[^\w\s]|\n anything that's not a digit, letter, whitespace, or new line character
     * **/
    return file.replace(/[^\w\s]|\n/g, '').toLowerCase().split(' ')
}
function buildTree(words) {
    let tree = new Tree();
    words.forEach(word => tree.insert(word));
    return tree;
}

readFile('./data/text.csv')
    .then(file => splitWords(file))
    .then(file => buildTree(file))
    .then(tree => logTree(tree))
    .catch(err => console.error(err));
