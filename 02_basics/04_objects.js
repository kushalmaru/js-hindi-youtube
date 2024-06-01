// const tinderUser = new Object()  // This is a singleton object
const tinderUser = {} // This is a non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "kushal",
            lastname: "maru"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) //{} using this in starting is a good practice
// console.log(obj3);

const obj3 = {...obj1, ...obj2}  // 90% time we are gonna use this syntax 
//console.log(obj3);

//console.log(tinderUser);

//console.log(Object.keys(tinderUser));  // converts all the keys into a set of array
//console.log(Object.values(tinderUser)); // converts all the values into a set of array 
//console.log(Object.entries(tinderUser));

 console.log(tinderUser.hasOwnProperty('isLoggedIn'));

 const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {               // {} denotes - object
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[                 // [] denotes - array
    {},
    {},
    {}
]
