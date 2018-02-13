const assert = require('assert');
const test1 = [3,4,2,17,1,23,1,2,1,2,17,1];

const occurences = array => {
    return array.reduce((obj, next) => {
        obj[next] ? obj[next]++ : obj[next] = 1;
        return obj;
    }, {});
}

/** returns the number which occurs the most **/
// O(2n) -> O(n)
function frequentInteger(array) {
    let occuencesMap = occurences(array);
    /** sort may perform better than simply iterating over the keys and finding the max **/
    return Object.keys(occuencesMap)
        .sort((f, s) => occuencesMap[s] - occuencesMap[f])[0];
}
// O(n)
function findFrequentIntOneLoop(array) {
    let map = {};
    let max = 0;

    array.forEach(int => {
        map[int] = map[int] ? ++map[int] : map[int] = 1;
        if (map[int] > max) {
            max = map[int];
        } 
    })
    return map[max];
}

assert.equal(findFrequentIntOneLoop(test1), 1);
assert.equal(frequentInteger(test1), 1);
