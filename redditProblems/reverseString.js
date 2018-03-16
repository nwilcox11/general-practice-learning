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

/**
 * Recursive reverse
 * **/

function recusiveReverse(string) {
    return string ? recusiveReverse(string.substr(1)) + string[0] : string;
}

assert.equal(recusiveReverse('nick'), 'kcin');
assert.equal(recusiveReverse('hey im nick'), 'kcin mi yeh');

/**
 * Sneaky rightReduce for the win
 * **/

function reduceRightRev(string) {
    return string.split('').reduceRight((str, curr) => str += curr, '');
}
assert.equal(reduceRightRev('nick'), 'kcin');
assert.equal(reduceRightRev('hey im nick'), 'kcin mi yeh');