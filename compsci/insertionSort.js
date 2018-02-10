const assert = require('assert');
/**
 * O(n^2) Quadratic running time
 * 
 * Sorts in place, by maintaining a sorted sublist starting at index 0
 * First loop iterates over every element
 * Second element will loop through currently sorted list to find place for key,
 * second loop will iterate as long as key is less than  items in sorted sublist
 * 
 * **/


const test1 = [9,7,1,2,4,6,3,8,5];
const test2 = [34,12,100,-32, 4];

function insertionSort(array) {
    let i;
    let j;
    /** starting at 1 saves us a wasted iteration **/
    for (i = 1; i < array.length; i++) {
        /** updating the key at each iteration **/
        let key = array[i];
        /** iterating through sorted items, will skip first item **/
        for (j = i; j > 0 && key < array[j - 1]; j--) {
            /** swapping left **/
            array[j] = array[j - 1];
        }
        /** completing swap after decrementing j **/
        array[j] = key;
    }
    return array
}

assert.deepEqual(insertionSort(test1), [1,2,3,4,5,6,7,8,9]);
assert.deepEqual(insertionSort(test2), [-32,4,12,34,100]);