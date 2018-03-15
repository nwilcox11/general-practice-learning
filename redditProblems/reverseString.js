const assert = require('assert');

/**
 * Iteratively reverse a string
 * O(n)
 * **/

function reverse(string) {
    let str = '';
    for (let i = string.length - 1; i >= 0; i--) {
        str += string[i];
    }
    return str;
}

assert.equal(reverse('nick'), 'kcin');
assert.equal(reverse('hey im nick'), 'kcin mi yeh');