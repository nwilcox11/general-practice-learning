/** 
 * Implementation of a priority queue
 * An array visualized as a nearly complete binary tree
 * 
 * Max Heap: Each Parent is greater than or equal to each of its children
 * **/

// left child = 2i + 1
// right child = 2i + 2
// parent = Math.floor(i - 1) / 2

const test = [16,8,10,14,7,9,3,2,4,1];

/** returns max heap from unordered array, does not modify original array **/
function buildMaxHeap(array) {
    let maxHeap = [...array];
    let start = Math.floor((maxHeap.length - 1) / 2);
    for (let i = start; i >= 0; i--) {
        maxHeapify(maxHeap, i);
    }
    return maxHeap
}
/** returns min heap from unordered array, does not modify original array **/
function buildMinHeap(array) {
    let minHeap = [...array];
    let start = Math.floor((minHeap.length - 1) / 2);
    for (let i = start; i >= 0; i--) {
        minHeapify(minHeap, i);
    }
    return minHeap;
}
/** perform one swap or correction of a heap property 
 * min heap -- parents are lesser than each of its children **/
function minHeapify(array, index) {
    let lowest = index;
    let leftIndex = (2 * index) + 1;
    let rightIndex = (2 * index) + 2;
    let size = array.length - 1;
    let temp;
    // if we have a value that is less than index / root, set lowest to that index
    if (leftIndex <= size && array[leftIndex] < array[lowest]) {
        lowest = leftIndex;
    }
    if (rightIndex <= size && array[rightIndex] < array[lowest]) {
        lowest = rightIndex;
    }
    if (lowest !== index) {
        temp = array[index];
        array[index] = array[lowest];
        array[lowest] = temp;
        minHeapify(array, lowest);
    }
    return array;
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
/** returns parent node index of passed index **/
function parent(index) {
    return Math.floor((index - 1) / 2);
}
/** 
 * insert into the priority queue 
 * new node can be added at left most available position at lowest level
 * **/
function insert(maxHeap, node) {
    /** add node to left most available position **/
    maxHeap.push(node);
    let start = Math.floor((maxHeap.length - 1) / 2);
    /** starting at left most node at bottom level **/
    for (let i = start; i >= 0; i--) {
        /** Call max heapify at each index to fix each sub heap **/
        maxHeapify(maxHeap, i);
    }
    return maxHeap;
}
/** returns a sorted array using heap sort O(n log n) **/
function heapSort(maxHeap) {
    let size = Math.floor(maxHeap.length - 1);
    let result = [];

    for (let i = size; i >= 0; i--) {
        result.push(extractMax(maxHeap));
    }
    return result;
}

function maxHeapToMin(maxHeap) {
    /** dont mutate the original maxHeap **/
    let minHeap = [...maxHeap];
    let start = Math.floor((maxHeap.length - 1) / 2);
    for (let i = start; i >= 0; i--) {
        /** Call max heapify at each index to fix each sub heap **/
        minHeapify(minHeap, i);
    }
    return minHeap;
}

const minHeap = buildMinHeap(test);
const maxHeap = buildMaxHeap(test);
console.log(`MIN_HEAP: ${minHeap}`);
console.log(`MAX_HEAP: ${maxHeap}`);
console.log(`MIN_HEAP from MAX: ${maxHeapToMin(maxHeap)}`)

