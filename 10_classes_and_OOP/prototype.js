let myName = "kushal     "

console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.kushal = function(){
    console.log(`Kushal is present in all object`);
}

Array.prototype.heyKushal = function(){
    console.log(`Kushal says hello`);
}

// heroPower.kushal()

// myHeros.kushal()
// myHeros.heyKushal()
// heroPower.heyKushal()


// INHERITANCE


const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"kushal".trueLength()
"iceTea".trueLength()

