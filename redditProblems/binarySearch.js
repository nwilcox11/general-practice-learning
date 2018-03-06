const assert = require('assert');
/**Implement binary search of a sorted array of integers **/
const test = [1,2,3,4,5,6,7,8,9,10];

function binarySearch(n, array) {
    /** keeping bounds **/
    let high = array.length - 1
    let low = 0;
    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        let guess = array[mid];
        if (guess === n) {
            return guess;
        } else if (guess < n) {
            /** remove left half of list **/
            low = mid + 1;
        } else {
            /** remove right half of list **/
            high = mid - 1;
        }
    }
    return 'Not here';
}
assert.equal(binarySearch(6, test), 6);

function recursiveBinarySearch(target, low, high, array) {
    let mid = Math.floor((high + low) / 2);

    if (high < low) {
        return 'Not Here'
    }

    if (array[mid] === target) {
        return array[mid];
    } else if (array[mid] < target) {
        /** search in the right half of array **/
        return recursiveBinarySearch(target, mid + 1, high, array);
    } else {
        /** search in left half of array **/
        return recursiveBinarySearch(target, low, mid - 1, array);
    }
}

assert.equal(recursiveBinarySearch(12, 0, test.length - 1, test), 'Not Here');
assert.equal(recursiveBinarySearch(2, 0, test.length - 1, test), 2);

/** Recursion with a better signature **/
function recurBinSearch(target, array) {
    let piv = Math.floor(array.length / 2);
    if (array.length === 1 && array[piv] !== target) {
        return 'Not Found';
    }

    if (array[piv] === target) {
        return array[piv];
    } else if (array[piv] > target) {
        /** we want left half - remove right half **/
        return recurBinSearch(target, array.slice(0, piv));
    } else {
        /** we want right half - remove left half **/
        return recurBinSearch(target, array.slice(piv, array.length));
    }
}

assert.equal(recurBinSearch(12, test), 'Not Found');
assert.equal(recurBinSearch(2, test), 2);