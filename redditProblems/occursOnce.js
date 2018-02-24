const assert = require('assert');

const test = [5,3,5,6,3,2,6,1,2,1,7,8,7,9,8];
const test2 = [7,7,7,9,1,9,2,1,2,12,14,13,14,13];
const test3 = [2,1,1,1,1];
const test4 = [2,2,2,2,1];
/** returns map of occurances **/
function getOccurances(array) {
    return array.reduce((map, num) => {
        map[num] = map[num] ? map[num] += 1 : map[num] = 1;
        return map
    }, {});
}
/** 
 * Find the only element in an array that only occurs once.
 * Implies that there is only ONE element that occurs once **/
function occursOnce(array) {
    const occurances = getOccurances(array);
    const occurancesKeys = Object.keys(occurances);

    for (let i = 0; i < occurancesKeys.length; i++) {
        if (occurances[occurancesKeys[i]] === 1) {
            return occurancesKeys[i]; // return first occurance since we are only looking for one
        }
    }
    return result;
}   
assert.equal(occursOnce(test), 9);
assert.equal(occursOnce(test2), 12);
assert.equal(occursOnce(test3), 2);
assert.equal(occursOnce(test4), 1);