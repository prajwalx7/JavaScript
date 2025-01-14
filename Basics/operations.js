let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2); 
// console.log(2 / 2);
// console.log(2 % 2);

let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2;
// console.log(str3);

// console.log("1" + 2 + 2); // => 122 
// console.log(1 + 2 + "2"); // => 32 


// console.log(+true); // 1
// console.log(-false); // -0

let gameCounter = 100;
gameCounter++;
// console.log(gameCounter);
gameCounter--;
// console.log(gameCounter);    


// post increment
// returns the original value, then increments
let x = 3;
let y = x++;

console.log(`x:${x}, y:${y}`);
// x = 4, y = 3

// pre increment
// increments the original value, then returns
let a = 3;
let b = ++a;

console.log(`a:${a}, b:${b}`);
// a = 4, b = 4