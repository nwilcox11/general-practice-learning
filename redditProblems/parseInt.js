const assert = require('assert');
/** implement parse int with the implied base of 10 **/

function parse(string) {
    const normalized = typeof string !== 'string' ? string.toString() : string; // normalize if a number type is passed
    const parsed = /[0-9]+/.exec(normalized); // pull out number
    const sign = /(s*\-|\+)/.exec(normalized); // check of a sign
    if (!parsed) {
        return NaN;
    }
    let result = 0;
    let previous = 0;
    let base = 1;
    let iterator = parsed[0].length - 1; // start at the end of the string
    while(iterator >= 0) {
        result = (base * parsed[0][iterator]) + previous; // building the number, place by place as we move from last digit to first
        base *= 10;
        previous = result;
        iterator--;
    }
    return sign!== null && sign.shift() ? -result : result;
}

assert.equal(parse('1234'), parseInt('1234'));
assert.equal(parse('  -23.5'), parseInt('  -23.5'));
assert.equal(parse('12gg34'), parseInt('12gg34'));
assert.equal(parse('   -12.22 '), parseInt('   -12.22 '));
assert.equal(parse('-1002.12x34'), parseInt('-1002.12x34'));
assert.equal(parse(12023403240), parseInt(12023403240));
assert.equal(isNaN(parse('   ')), isNaN(parseInt('   ')))