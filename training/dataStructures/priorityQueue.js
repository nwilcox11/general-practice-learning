class PriorityQueue {
    constructor(array) {
        if (array.constructor !== Array) {
            throw 'Passed Argument is not an array';
        }
        this.array = array;
    }
    getLeftChildIndex(index) {
        return (2 * index) + 1;
    }
    getRightChildIndex(index) {
        return (2 * index) + 2
    }
    buildMaxHeap() {
        let start = Math.floor((this.array.length - 1) / 2);
        for (let i = start; i >= 0; i--) {
            this.maxHeapify(this.array, i);
        }
        return this.array;
    }
    maxHeapify(array, index) {
        let largest = index; // set largest to index
        let leftIndex = this.getLeftChildIndex(index);
        let rightIndex = this.getRightChildIndex(index);
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
            this.maxHeapify(array, largest);
        }
        return array;
    }
    extractMax() {
        let size = Math.floor(this.array.length - 1);
        /** max is always first index of maxHeap **/
        let max = this.array[0];
        /** swap the last element with the 'removed' first element **/
        this.array[0] = this.array[size];
        /** decrement the array size to remove the first element **/
        this.array.length -= 1; 
        /** run maxHeapify to re-balance the maxHeap **/
        this.maxHeapify(this.array, 0);
        /** return max **/
        return max;
    }
    insert(node) {
        /** add node to left most available position **/
        this.array.push(node);
        let start = Math.floor((this.array.length - 1) / 2);
        /** starting at left most node at bottom level **/
        for (let i = start; i >= 0; i--) {
            /** Call max heapify at each index to fix each sub heap **/
            this.maxHeapify(this.array, i);
        }
        return this.array;
    }
    /** dont destroy or modify class level shared heap state 
     * Similar to extract max, except we are not modifying passed array **/
    heapSort(maxHeap) {
        let heap = [...maxHeap];
        let sorted = [];
        let heapSize = heap.length - 1;

        for (let i = heapSize; i >= 0; i--) {
            /** adding max to sorted array **/
            sorted.push(heap[0]);
            /** move max to last available heap position **/
            heap[0] = heap[i];
            /** decrement array length to remove previous max **/
            heap.length -= 1;
            /** run heapify to restore max heap **/
            this.maxHeapify(heap, 0);
        }
        return sorted;
    }
}