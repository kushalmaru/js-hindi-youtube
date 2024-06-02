//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "kushal"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}
one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5))  // calling here will not throw error

function addone(num){
    return num + 1
}



addTwo(5) // calling here will throw error
const addTwo = function(num){  // another way to declare functions
    return num + 2
}
//addTwo(5) // calling here will not throw error

