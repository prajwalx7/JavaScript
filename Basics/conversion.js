// let age = "a";
let age = "42";

console.log(typeof(age));

let newAge = Number(age);
console.log(newAge); // Nan => Not a number
console.log(typeof(newAge));


// "42" => 42
// "42a" => Nan => Not a number
// true => 1
// false => 0
// "" => 0
// "abx" => 1
// null => 0


let num = 68;

let toString = String(num);
console.log(typeof toString); 