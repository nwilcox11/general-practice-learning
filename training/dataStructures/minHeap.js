module.exports = function(array) {
    const heap = buildMinHeap(array);
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
    function extractMin() {
        let size = Math.floor(heap.length - 1);
        /** max is always first index of maxHeap **/
        let min = heap[0];
        /** swap the last element with the 'removed' first element **/
        heap[0] = heap[size];
        /** decrement the array size to remove the first element **/
        heap.length -= 1; 
        /** run maxHeapify to re-balance the maxHeap **/
        minHeapify(heap, 0);
        /** return max **/
        return min;
    }
    function peek() {
        return heap[0];
    }
    function heapSort() {
        let toSort = [...heap];
        let size = toSort.length - 1;
        let sorted = [];

        for (let i = size; i >= 0; i--) {
            sorted.push(toSort[0]);
            toSort[0] = toSort[i];
            toSort.length -= 1;
            minHeapify(toSort, 0)
        }
        return sorted;
    }

    return {
        heap,
        extractMin,
        heapSort,
        peek
    }

}