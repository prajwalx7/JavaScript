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
    console.log("Hello World");
}


myFunc();