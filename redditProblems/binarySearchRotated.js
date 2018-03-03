const assert = require('assert');
const rotate = require('../rotatingArray');

const test = [5,6,7,8,1,2,3];

/** Implement binary search in a rotated sorted array (ex. {5,6,7,8,1,2,3}) **/

/** 
 *  O(n log n)
 *  **/

/**
 * binarySearcher sorts an array, returns a function that takes a target and finds the target in O(log n)
 * in the pre loaded array
 * **/
function binarySearcher(array) {
    let sorted = array.sort((a, b) => a - b);
    function rotatedSearch(target) {
        let arrayToSearch = [...sorted];
        while (sorted.length) {
            let pivot = Math.floor(arrayToSearch.length / 2);
            if (arrayToSearch[pivot] === target) {
                return arrayToSearch[pivot];
            } else if (arrayToSearch[pivot] > target) {
                arrayToSearch = arrayToSearch.slice(0, pivot);
            } else {
                arrayToSearch = arrayToSearch.slice(pivot, arrayToSearch.length);
            }
        }
    }
    return rotatedSearch
}

const rotatedSearch = binarySearcher(test);

assert.equal(rotatedSearch(4), 4);

const test2 = rotate([1,2,3,4,5,6,7,8,9,10]);

/** O(log n) **/

function binarySearchRotated(target, array) {

}