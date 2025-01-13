var a = "John"; // old way to declare variable
console.log(a);

let b = "Mark"; // modern way to declare variable
console.log(b);

const c = "Jane"; // To declare constant varibales
console.log(c);

// JavaScript is case-sensitive, so myVariable and myvariable are different.

let age = 22;
let favoriteFood = "Pizza"; // can be updated but cannot be redeclared
favoriteFood = "Sushi";
console.log(favoriteFood);

const birthYear = 2002;
// const birthYear = 2003; // const cannot be redeclared or reassigned
console.log(birthYear);


/* scopes

1. Global scope - a varibale decleared outside of any function or block
2. Function scope - a varibale decleared inside a function
3. Block scope - a varibale decleared inside a block {} limited to that block
4. Lexical scope - a varibale decleared inside a function, limited to that function


*/