'use strict';

// https://www.codewars.com/kata/two-to-one/javascript
// Take 2 strings s1 and s2 including only letters from ato z.
// Return a new sorted string, the longest possible,
// containing distinct letters,
// - each taken only once - coming from s1 or s2.


const removeDuplicates = ((string) => string
  .split('')
  .sort()
  .filter((e, i, a) => e !== a[i-1]).join('')
);

const longest = ((s1, s2) => removeDuplicates(s1 + s2));

console.log(longest('sduyfsadf', 'jkljsdfsdtjsorndsvs'));
