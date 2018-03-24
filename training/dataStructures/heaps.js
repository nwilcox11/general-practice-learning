/** 
 * Implementation of a priority queue
 * An array visualized as a nearly complete binary tree
 * 
 * Max Heap: Each Parent is greater than or equal to each of its children
 * **/

// left child = 2i + 1
// right child = 2i + 2

const test = [16,8,10,14,7,9,3,2,4,1];
const test3 = [11,13,5,6,7,12]
/** returns max heap from unordered array, does not modify original array **/
function buildMaxHeap(array) {
    let maxHeap = [...array];
    let start = Math.floor((maxHeap.length - 1) / 2);
    for (let i = start; i >= 0; i--) {
        maxHeapify(maxHeap, i);
    }
    return maxHeap
}
/** perform one 'swap' or correction of a heap property **/
function maxHeapify(array, index) {
    let largest = index; // set largest to index
    let leftIndex = (2 * index) + 1;
    let rightIndex = (2 * index) + 2;
    let size = array.length - 1;
    let temp;
    /** if left index is in heap and element at left is > than element at root/index **/
    if (leftIndex <= size && array[leftIndex] > array[largest]) {
        largest = leftIndex;
    }
    /** check if right child is larger that current largest **/
    if (rightIndex <= size && array[rightIndex] > array[largest]) {
        largest = rightIndex;
    }
    /** if largest is not the index -- swap index and largest **/
    if (largest !== index) {
        temp = array[index];
        array[index] = array[largest];
        array[largest] = temp;
        /** heapify the next subTree with largest at root/index **/
        maxHeapify(array, largest);
    }
    return array;
}
/** 
 * returns and removes the max value of the max heap, must also rebalance the max heap
 * This is done without js built-ins (pop or shift)
 * O(log n) -> n is heap size
 * **/
function extractMax(maxHeap) {
    let size = Math.floor(maxHeap.length - 1);
    /** max is always first index of maxHeap **/
    let max = maxHeap[0];
    /** swap the last element with the 'removed' first element **/
    maxHeap[0] = maxHeap[size];
    /** decrement the array size to remove the first element **/
    maxHeap.length -= 1; 
    /** run maxHeapify to re-balance the maxHeap **/
    maxHeapify(maxHeap, 0);
    /** return max **/
    return max;
}
/** returns a sorted array using heap sort O(n log n) **/
function heapSort() { }
/** insert into the priority queue **/
function insert() { }
