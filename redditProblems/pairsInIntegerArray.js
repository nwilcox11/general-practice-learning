assert = require('assert');
const test1 = [2,1,3,5,5,7,6,4,9];
/** Find pairs in an integer array whose sum is equal to 10 (bonus: do it in linear time) **/

// O(n^2)
function pairInArray(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === 10) {
                let arr = [array[i], array[j]];
                result.push(arr);
            }
        }
    }
    return result;
}

/** linear time O(n) **/
function pairInArrayLinearTime(array) {
    let pairs = [];
    let map = {};
    for (let i = 0; i < array.length; i++) {
        /** if the current element is in our map, we found a pair **/
        if (map[array[i]]) {
            let arr = [map[array[i]], array[i]];
            pairs.push(arr);
        } else {
            /** setting the difference between the current element in array and target sum as key in map,
             * the value is set to the current element in array forming a pair **/ 
            map[10 - array[i]] = array[i];
        }
    }
    return pairs;
}

assert.deepEqual(pairInArrayLinearTime(test1), [ [ 5, 5 ], [ 3, 7 ], [ 6, 4 ], [ 1, 9 ] ])
assert.deepEqual(pairInArray(test1), [ [ 1, 9 ], [ 3, 7 ], [ 5, 5 ], [6,4] ] )

