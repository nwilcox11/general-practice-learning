const assert = require('assert');

/**
 * Check if a string has all unique chars
 * **/

/** 
 * using map 
 * O(n)
 * **/
function unique(string) {
    /** remove spaces and any upper case **/
    string = string.replace(/\s/g, '').toLowerCase();
    let stringMap = {};
    for (let i = 0; i < string.length; i++) {
        if (stringMap[string[i]]) {
            return false;
        } else {
            stringMap[string[i]] = 1;
        }
    }
    return true;
}

assert.equal(unique('nNick'), false);
assert.equal(unique('Nick'), true);
assert.equal(unique('Hey my name is nick'), false);
assert.equal(unique('wilcoxx'), false);
assert.equal(unique('a e i o u'), true);
assert.equal(unique('wwilcox'), false);