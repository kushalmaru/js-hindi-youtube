// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);


// +++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack Memory(Primitive), Heap Memory(Non-Primitive)
// Stack Memory - Copy of Data/Pass by value [Any changes made will be on copy of data]
// Heap Memory - Copy by reference(original data) [Any changes made will be on reference of data(original data)]

let myYoutubeName = "kushalmaru";

let anotherName = myYoutubeName;
anotherName = "Kushal";

console.log(myYoutubeName); //so here the output will still be "kushalmaru" coz the above changes were happened on the copy of it and not the original data
// So basically the above example was for "primitive data type" and thats why it was Copy of Data/Pass by value
console.log(anotherName);

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne;
userTwo.email = "usertwo@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);