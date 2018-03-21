const assert = require('assert');

const test1 = [1,2,22,2,2,3,4,5,9];
const test2 = [5,4,3,2,2,1,6,7,8,9];
/** Find the common elements of 2 int arrays **/

/** remove duplicates as keys cannot be dups **/
function arrayMapper(array) {
    return array.reduce((map, num) => {
        map[num] = num;
        return map
    }, {});
}
/** create 2 maps to eliminate duplicates, iterate over keys, check if the keys are present in both maps
 * return array of those elements
 * O(n + m) **/
function findCommon(array1, array2) {
    const arrayMap = arrayMapper(array1);
    const arrayMap2 = arrayMapper(array2);
    const mapIterable = Object.keys(arrayMap);

    return mapIterable.filter(num => {
        if (arrayMap[num] === arrayMap2[num]) {
            return num;
        }
    });
}

assert.deepEqual(findCommon(test1, test2), [1,2,3,4,5,9]);

function createMap(array) {
    return array.reduce((map, num) => {
        map.set(num, num);
        return map;
    }, new Map())
}

/** Using js Maps **/
function findCommonInts(array, array2) {
    const arrayMap = createMap(array);
    const arrayMap2 = createMap(array2);
    let common = [];
    /** we can iterate Maps with for...of **/
    for(let key of arrayMap.keys()) {
        if (arrayMap2.has(key)) {
            common.push(arrayMap2.get(key))
        }
    }
    return common;
}

assert.deepEqual(findCommonInts(test1, test2), [1,2,3,4,5,9]);