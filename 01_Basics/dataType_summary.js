
// Primitive

//>>>> 7 types : String, Number, Boolean, null, undefined, symbol,BigInt

const score = 100 //Number
const scoreValue = 100.3 //Number

const isLoggedIn = false //boolean
const outsideTemp = null //null
let userEmail; // undefined

const id = Symbol('123') //symbol
const anotherId = Symbol('123')//symbol
console.log(id === anotherId);

// const bigNumber = 65234646476456726n

// Reference (Non primitive)

//>>>> Array, objects, Function

const heros = ["shaktiman", "naagraj", "doga"];

let myObj ={
    name: "madhabendra",
    age: 22,
}
const myFunction = function(){
    console.log("hello cutie");
}
console.log(typeof bigNumber );

// ***************Memory******************

//stack (Primitive),  Heap ( Non-primitive)

     // >>Stack........copy
let myLocalName = "Milan"
let anothername = myLocalName
anothername = "Madhabendra"

console.log(myLocalName);
console.log(anothername);

    // >>Heap..........reference
    let userOne = {
        email: "milan@gamil.com",
        upi: "user@ybl"
    }
    let userTwo = userOne
    userTwo.email="user@gamil.com"
    console.log(userOne.email)
    console.log(userTwo.email)
