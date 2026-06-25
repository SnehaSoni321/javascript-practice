// Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const scroe = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 355352153256451254545n

// Reference (Non Primitive)
// Array, Objects, Functions

const heros = ["sneha", "Tonu", "Sonu"] 
let myObj = {
    name: "sneha",
    age: 21
}

const myFunction = function() {
    console.log("Hello world")
}
myFunction()

console.log(typeof bigNumber)
console.log(typeof scroe)
console.log(typeof scoreValue)