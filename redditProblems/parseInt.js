/** implement parse int
 * parseInt parses a string arg and returns an integer of the specified radix (base) 2 - 36
 * 
 * use regex to match each char making sure its a number
 *      if we encounter a non number char stop there an return integer value parsed up to that point
 * **/

function parse(string) {
    const argToConvert = typeof string !== 'string' ? string.toString() : string;
    /** get numbers **/
    const regex = /[0-9]/g; // literals are better performing when we know the regex ahead of time

    let stringArray = argToConvert.match(regex);

    return stringArray
}
const test = '12g34'

console.log('parseInt', parseInt(test))
console.log(parse(test));