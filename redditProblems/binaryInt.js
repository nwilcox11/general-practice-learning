const assert = require('assert');

/** 
 * return the binary form of an int 
 * convert integer to binary, start with the integer in question and 
 * divide number by 2 keeping the quotient and the remainder. 
 * Continue dividing the quotient by 2 until you get a quotient of zero. 
 * Shift the remainders onto and array (could be a string), join and coerce to a number
 * **/

function intToBinary(n) {
    let bin = [];
    while(n !== 0) {
        let remainder = n % 2;
        n = Math.floor(n / 2);
        bin.unshift(remainder);
    }
    return Number(bin.join(''));
}

assert.equal(intToBinary(100), 1100100);
assert.equal(intToBinary(2), 10);
assert.equal(intToBinary(27), 11011);
assert.equal(intToBinary(8), 1000);
assert.equal(intToBinary(74), 1001010);