const assert = require('assert');
const rotate = require('../rotatingArray');

const test = [5,6,7,8,1,2,3];

/** Implement binary search in a rotated sorted array with no duplicates (ex. {5,6,7,8,1,2,3}) **/

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
        while (arrayToSearch.length) {
            let pivot = Math.floor(arrayToSearch.length / 2);

            if (arrayToSearch.length === 1 && arrayToSearch[pivot] !== target) {
                return 'Not Found'
            }

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

assert.equal(rotatedSearch(1), 1);
assert.equal(rotatedSearch(4), 'Not Found');

const test2 = rotate([1,2,3,4,5,6,7,8,9,10,11,12,13]);

/** O(log n) **/

function binarySearchRotated(target, array) {

    let piv = Math.floor(array.length / 2) + 1; // dont choose the max number as pivot
    let left = array.slice(0, piv);
    let right = array.slice(piv);

    /** search through both left and right lists until we find it, this is gross looking **/
    while(right.length && left.length) {
        let rMid = Math.floor(right.length / 2);
        let lMid = Math.floor(left.length / 2);

        if ((right.length === 1 && right[rMid] !== target) && 
            (left.length === 1 && left[lMid] !== target)) {
            return 'Not Found';
        }

        if (right[rMid] === target) {
            return right[rMid];
        } else if(right[rMid] > target) {
            right = right.slice(0, rMid);
        } else {
            right = right.slice(rMid, right.length);
        }

        if (left[lMid] === target) {
            return left[lMid];
        } else if (left[lMid] > target) {
            left = left.slice(0, lMid);
        } else {
            left = left.slice(lMid, left.length);
        }
    }
}

assert.equal(binarySearchRotated(1, test2), 1);
assert.equal(binarySearchRotated(4, test2), 4);
assert.equal(binarySearchRotated(12, test2), 12);
assert.equal(binarySearchRotated(7, test2), 7);
assert.equal(binarySearchRotated(9, test2), 9);
assert.equal(binarySearchRotated(100, test2), 'Not Found');

/** Better **/
function rotatedBinSearch(target, array) {
    let high = array.length;
    let low = 0;
    let pivot;

    while(high >= low) {
        pivot = Math.floor((high + low) / 2);

        if (array[pivot] === target) {
            return array[pivot]
        } else if (array[low] < array[pivot]) {
            if (array[low] <= target && target < array[pivot]) {
                high = pivot - 1; 
            } else {
                low = pivot + 1;
            }
        } else {
            if (array[high] <= target && target < array[pivot]) {
                low = pivot + 1;
            } else {
                high = pivot - 1;
            }
        }
    }
    return 'Not Found';
}

assert.equal(rotatedBinSearch(1, test2), 1);
assert.equal(rotatedBinSearch(4, test2), 4);
assert.equal(rotatedBinSearch(12, test2), 12);
assert.equal(rotatedBinSearch(7, test2), 7);
assert.equal(rotatedBinSearch(9, test2), 9);
assert.equal(rotatedBinSearch(100, test2), 'Not Found');

/** Recursive rotated binary search -- O(log n) -- Best? **/
/**
 * Grab middle element, if its target return
 * Check to see if left half is sorted, once we know which half is sorted we can check which half target is in
 *      check to see which half target is in, binary search in this half
 * if left half is not sorted, right must be
 *      check to see which half target is in, call binary search in this half
 * **/
function recBinSearch(target, left, right, array) {
    if (left > right) {
        return 'Not Found';
    }
    /** grabbing middle element **/
    let mid = Math.floor((right + left) / 2);
    if (array[mid] === target) {
        return array[mid];
        /** checking if left array is sorted **/
    } else if (array[left] <= array[mid]) {
        /** if left array is sorted  **/
        if (target >= array[left] && target <= array[mid]) {
            /** target is in the left half **/
            return recBinSearch(target, left, mid - 1, array);
        } else {
            /** target is in the right half **/
            return recBinSearch(target, mid + 1, right, array);
        }
        /** if left bound to mid is not sorted, mid to right bound must be sorted **/
    } else {
        if (target >= array[mid] && target <= array[right]) {
            /** target is in the right half **/
            return recBinSearch(target, mid + 1, right, array);
        } else {
            /** target is in the left half **/
            return recBinSearch(target, left, mid - 1, array);
        }
    }
}

const test3 = [10, 20, 1, 3, 6, 7 ,8];
const test4 = [10, 20, 40, 3, 6, 7 , 9];
assert.equal(recBinSearch(1, 0, test3.length - 1, test3), 1);
assert.equal(recBinSearch(20,  0, test3.length - 1, test3), 20);
assert.equal(recBinSearch(12,  0, test2.length - 1,test2), 12);
assert.equal(recBinSearch(7,  0, test3.length - 1, test3), 7);
assert.equal(recBinSearch(9,  0, test4.length - 1, test4), 9);
assert.equal(recBinSearch(100,  0, test2.length - 1, test2), 'Not Found');