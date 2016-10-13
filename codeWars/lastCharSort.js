'use strict';

/*
Given a string of words (x), you need to return an array of the words,
sorted alphabetically by the final character in each.

If two words have the same last letter, the returned array should show them in the
order they appeared in the given string.

All inputs will be valid.
*/

// https://www.codewars.com/kata/sort-by-last-char/javascript

// returns last char in string
function getLastChar(string) {
  return string.charAt(string.length - 1);
}

function last(sen) {
  let senArr = sen.split(' ');
// sort by last char
    return senArr.sort((a, b) => {
      if(getLastChar(a) > getLastChar(b)) {
        return 1;
      } if(getLastChar(a) < getLastChar(b)) {
        return - 1;
      }
      return 0;
    });
}
