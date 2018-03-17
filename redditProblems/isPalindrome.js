const assert = require('assert');

/**
 * is a string a palindrome?
 * a word, phrase, or sequence that reads the same backward as forward
 * **/

/** start at each end and check each char 
 * O(n) **/
function isPalindrome(string) {
    let normalized = string.replace(/\s/g, '').toLowerCase(); // removes casing and spaces
    let start = 0;
    let end = normalized.length - 1;

    while(start < end) {
        if (normalized[start] !== normalized[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

assert.equal(isPalindrome('racecar'), true);
assert.equal(isPalindrome('madam'), true);
assert.equal(isPalindrome('civic'), true);
assert.equal(isPalindrome('nick'), false);
assert.equal(isPalindrome('wnickw'), false);
assert.equal(isPalindrome('Al lets Della call Ed Stella'), true);
assert.equal(isPalindrome('Ah Satan sees Natasha'), true);
/**
 * recursive next
 * **/

 /**
  * O(n/2)
  * **/