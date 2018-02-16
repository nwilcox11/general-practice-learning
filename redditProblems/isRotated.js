const test = [1,2,3,5,6,7,8];
const test2 = [1, 2, 3, 4, 5]
const rotated = rotate(test2);

function rotate(arr) {
    let mid = Math.floor((arr.length - 1) / 2);
    let copy = arr.slice(0); // do not mutate
    while(mid > 0) {
      let picked = copy.shift(); // picks last element
      copy.push(picked); // puts it on the front of the array
      mid--;
    }
    return copy;
}

 //  O(n) 
function isRotated(array, rotatedArray) {
    if (array.length === rotatedArray.length) {
        return (rotate(array).toString() === rotatedArray.toString());
    }
    return false;
}
console.log(isRotated(test2, rotated))
