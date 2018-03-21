const assert = require('assert');

// characterized by the fact that every number after the first two is the sum of the two preceding ones

/** returns array of fibo sequence **/
function fibonacci(n) {
    let result = [0, 1];
    for(let i = 2; i <= n; i++) {
        result[i] = result[i - 1] + result[i - 2]
    }
    return result;
}

assert.deepEqual(fibonacci(12), [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ]);

/** without using arrays, optimizing space complexity. 
 * we only store the previous 2 numbers **/
function nthFibo(n) {
    let first = 0;
    let second = 1;
    let third;
    for (let i = 2; i <= n; i++) {
        third = first + second;
        first = second;
        second = third;
    }
    return second;
}
const nthFib = nthFibo(12);

assert.equal(nthFibo(12), 144);

/** lots of rework here, poor implementation **/
function recusiveNthFibo(n) {
    if (n <= 1) {
        return n;
    }
    let fib = recusiveNthFibo(n - 1) + recusiveNthFibo(n - 2);
    return fib;
}

assert.equal(recusiveNthFibo(12), 144);

function memoizedFib(n) {
    /** add cache property to memoizedFib object
     * stores the previously calculated fib numbers
     * stops rework of previous recursive implementation **/
    memoizedFib.cache = memoizedFib.cache || [0, 1];
    if (memoizedFib.cache[n]) {
        return memoizedFib.cache[n];
    }
    if (n <= 1) {
        return n;
    }
    memoizedFib.cache[n] = memoizedFib(n - 1) + memoizedFib(n - 2);
    return memoizedFib.cache[n]
}

assert.equal(memoizedFib(15), 610);
