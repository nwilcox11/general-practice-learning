const array1 = [1,2];
const array2 = [3,4];
const array3 = [1, 2, 3, 6, 7, 8, 9] // 6

/**
 * Find median value of two sorted arrays
 * For a data set, it may be thought of as the "middle" value.
 * **/

/** we could merge the two sorted arrays and then find median of new array **/

function merge(array1, array2) {
    let array = [];
    let index = 0;
    while (array1.length && array2.length) {
        if (array1[0] < array2[0]) {
            array[index] = array1.splice(0, 1)[0];
        } else {
            array[index] = array2.splice(0, 1)[0];
        }
        index++;
    }
    if (array1.length) {
       array = array.concat(array1);
    }
    if (array2.length) {
       array = array.concat(array2);
    }
    return array;
}

function findMedianSortedArrays(nums1, nums2) {
    let merged = merge(nums1, nums2);
    let mid = (merged.length - 1) / 2;
    if (!merged[mid]) {
        let up = Math.ceil(mid);
        let down = Math.floor(mid);
        return (merged[up] + merged[down]) / 2; 
    }
    return merged[mid];
}
