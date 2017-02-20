'use strict';

/** Complete the solution so that it reverses all of the words within the string passed in **/

/** 
 * reverseWords("The greatest victory is that which requires no battle")
 * should return "battle no requires which that is victory greatest The"
 *  **/

const test = "hello world!";

const rev = (str) => str.split(' ').reverse().join(' ');

console.log(rev(test));