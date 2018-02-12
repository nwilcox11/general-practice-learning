const assert = require('assert');
/**
 * Implement Merge Sort O(n log n)
 * 
 * Alogrithm splits into 2 halves and recurses until first half is a bunch of sorted lists (one element arrays), from there will merge arrays back together in sorted order.
 * Will then recurse through the second half of original unsorted list using same pattern.  Once we have two sorted lists will merge those two back together, into one sorted list
 * **/
const test1 = [9,7,1,2,4,6,3,8,5];
const test2 = [34,12,100,-32,4];

function mergeSort(array) {
    if (array.length === 1) {
        return;
    }
    let mid = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, mid);
    let rightHalf = array.slice(mid);

    mergeSort(leftHalf);
    mergeSort(rightHalf);

    merge(rightHalf, leftHalf, array);
    return array;
}

function merge(rightArray, leftArray, array) {
    let index = 0;
    while(rightArray.length && leftArray.length) {
        if (rightArray[0] < leftArray[0]) {
            array[index] = rightArray.shift();
        } else {
            array[index] = leftArray.shift();
        }
        index++;
    }
    while (rightArray.length) {
        array[index] = rightArray.shift();
        index++;
    }
    while(leftArray.length) {
        array[index] = leftArray.shift();
        index++;
    }
}

try {
    let result1 = mergeSort(test1);
    let result2 = mergeSort(test2);
    assert.deepEqual(result1, [1,2,3,4,5,6,7,8,9]);
    assert.deepEqual(result2, [-32,4,12,34,100]);
    console.log('TESTS PASS -- Results are: ');
    console.log(result1, result2);
} catch(err) {
    console.error(err);
}
