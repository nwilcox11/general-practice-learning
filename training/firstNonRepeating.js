const assert = require('assert');

/** O(2n) --> O(n) **/
function noRepeat(string) {
   string = string.replace(/\s+/g, ''); // remove white space
    /** create map of occurances **/
    let stringMap = string.split('')
        .reduce((map, next, index) => {
            map[next] ? map[next]++ : map[next] = 1;
            return map; 
        }, {});
    /** walking through string checking map for characters that occur once **/
    for (let i = 0; i < string.length; i++) {
        if (stringMap[string[i]] === 1) {
            return string[i];
        }
    }
    return 'There are no non-repeating characters';
}

assert.equal(noRepeat('abccbade ffedx abc'), 'x');
assert.equal(noRepeat('abccbadet ffedx abc'), 't');
assert.equal(noRepeat('abccbade ffedxx abc'), 'There are no non-repeating characters');
assert.equal(noRepeat('t hheeyy imm nicckk'), 't');
assert.equal(noRepeat('tt hheeyy imm nnicck'), 'k');
assert.equal(noRepeat('  '), 'There are no non-repeating characters');