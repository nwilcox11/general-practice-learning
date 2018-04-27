const string = 'abcabc|bb' // 3
const string2 = 'c'; // 1 
const string3 = 'au'; // 2
const string4 = "dvdf" // 3 
const string5 = "pwwkew" // 3

/** 
 * Window algorithm
 *  **/

function lengthOfLongestSubstring(s) {
    let map = {};
    let n = s.length;
    let count = 0;
    let i = 0;
    let j = 0;
    /** O(n) where n is the length of the string **/
    while(i < n && j < n ) {
        if (!map[s[i]]) {
            map[s[i]] = true;
            i++;
            /** i and j are the window to check for substring, we keep sliding i until we hit an element we have seen already.
             * We then increment j and check again by sliding i until we reach the end of the string.  
             * We keep the count with i - j being the new challenging substring length **/
            count = count > i - j ? count : i - j // i - j is the new count length
        } else {
            /** move j, start count over **/
            map[s[j]] = false;
            j++
        }
    }
    return count;
}
