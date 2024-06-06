const user = {
    username: "kushal",
    loginCount: 8,
    signedIn: true,

    getUserDetails : function(){
        // console.log("Got user details from database");
        // console.log(`Username : ${this.username}`);
        console.log(this);  // LOCAL/ CURRENT CONTEXT
    }
}


console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);  // GLOBAL CONTEXT


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this  // NOT COMPULSORY TO WRITE. IT IS DEFINED IMPLICITLY
}

const userOne = new User("kushal", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)

console.log(userOne.constructor);
// console.log(userTwo);