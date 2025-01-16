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


const num1 = Symbol(10);
const num2 = Symbol(10);

// console.log(num1 === num2); // => false


const hugeNumber = 857235725725735823n;
// console.log(typeof hugeNumber);


const fruits = ["apple", "banana", "orange"];
// console.log(fruits);
let myData = {
    name: "Prajwal",
    age: 22,
}
// console.log(myData);


// Functions

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