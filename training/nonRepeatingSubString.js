const string = 'abcabc|bb' // 3
const string2 = 'c'; // 1 
const string3 = 'au'; // 2
const string4 = "dvdf" // 3 
const string5 = "pwwkew" // 3

function lengthOfLongestSubstring(s) {
    let map = {};
    let str = '';
    let count = 0;
    let n = s.length;
    let i = 0;
    let j = 0;

    while(i < n && j < n ) {
        if (!map[s[i]]) {
            map[s[i]] = true;
            i++;
            count = count > i - j ? count : i - j
        } else {
            map[s[j]] = false;
            j++
        }
    }
    return count;
}
    
console.log(lengthOfLongestSubstring(string))
// console.log(lengthOfLongestSubstring(string2))
// console.log(lengthOfLongestSubstring(string3))
// console.log(lengthOfLongestSubstring(string4))
// console.log(lengthOfLongestSubstring(string5))
