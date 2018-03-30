const createMinHeap = require('./minHeap');
const test = [16,8,10,14,7,9,3,2,4,1];
const minHeap = createMinHeap(test);

console.log(minHeap.heap)
console.log(minHeap.heapSort());
