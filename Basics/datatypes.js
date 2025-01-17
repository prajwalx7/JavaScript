console.log('Hello World!'); 


let namee = 'John';
let age = 23;
let loggedIn = true;
let value;

console.log(typeof namee); // => string
console.log(typeof age); // => number
console.log(typeof loggedIn); // => boolean
console.log(typeof value); // => undefined
console.log(typeof null); // => object
console.log(typeof undefined); // => undefined

// javascript is a dynamically typed language

// premitive

// string
// number
// boolean
// null => empty! not zero, not empty string
// undefined
// symbol => to make any value unique
// bigInt => used to store large numbers

// non-premitive/reference type

// array
// object
// functions 



// ******Symbol******
let id = Symbol(23);
let number = Symbol(23);

// console.log(id === number); // checks value and type
// console.log(id == number); // only checks value
// console.log(typeof id);
// console.log(typeof number);


// ******BigInt******
const hugeNumber = 857235725725735823n;
// console.log(typeof hugeNumber);


// ******Array******
const movies = ["Iron Man", "Captain America", "Avengers"];
// console.log(movies.push("Interstellar"));
// console.log(movies);

// ******Object******
let myData = {
    name: "Prajwal",
    age: 22,
}
// console.log(myData);


// ******Functions******
const myFunc = function(){
    // console.log("Hello World");
}

// myFunc();

function addition(a,b){
    sum = a + b;
    return sum;
}
// console.log(addition(2,3));



// **** Stack and Heap memory ****


// Stack Memory stores primitive values
// Last in first out strucuture
// faster data access
// Memory is automatically allocated when a function is called and deallocated when the function execution is complete.

let myName = "Prajwal";
let newName = myName;
anotherName = "Praj";
console.log(newName);
console.log(anotherName);


// Heap Memory stores objects
// unstructured data
// slower data access
// Memory is automatically allocated when an object is created and deallocated when the object is no longer needed.
// JavaScript uses a garbage collector to free up unused memory in the heap.

let userOne = {
    email : "tester@gmail.com",
    name : "Prajwal"
}

let userTwo = userOne;
userTwo.name = "john";

console.log(userOne.name);
console.log(userTwo.name);