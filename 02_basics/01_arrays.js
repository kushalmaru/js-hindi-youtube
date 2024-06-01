// Arrays
const myArr = [0,1,2,3,4,5,6];
const myArr2 = new Array(1,2,3,4);
// console.log(myArr[1]);

// Array Methods
// myArr.push(7);
// console.log(myArr);

const newArr = myArr.join(); // converted the type from object to string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// Slice, Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);


console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr); //splice manipulates the original array. it gives the given solution and removes the remaining part of array
console.log(myn2);
