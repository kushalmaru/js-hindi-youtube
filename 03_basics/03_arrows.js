const user = {
    username : "kushal",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "kushal"
//     console.log(this.username);  //we cant use/call "this" inside function, it will show output "undefined"
// }
// chai()

// const chai = function(){
//     let username = "kushal"
//     console.log(this.username);  //same here as above = undefined
// }

const chai = () => {    // here it is a "arrow" function
    let username = "kushal"
    console.log(this.username);  //same here as above = undefined
}

// chai()

// const addTwo = (num1, num2) => {  //Way 1 to write arrow function  //NOTE : If we use curly paranthesis, then only we need to use "return"
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2     //Way 2 to write arrow function //NOTE : If we use curly paranthesis, then only we need to use "return"

// const addTwo = (num1, num2) => (num1 + num2)      //Way 3 to write arrow function   //NOTE : If we use curly paranthesis, then only we need to use "return"

console.log(addTwo(3,4));

