//* The main purpose of using the spread operator is to store the value
//* of an array in a new array. It is used to store the value of an array not the reference of an array.

// TODO: Example:
// const number1 = [1, 2, 3, 4, 5];
// const number2 = [...number1];
// number1.push(9);
// number2.push(10);
// console.log(number1);
// console.log(number2);

//* Destructuring:  means to break down a complex structure into simpler parts. It is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// ! Array Destructuring

const numbers = [1, 2, 3, 4, 5];
[a, b, c] = numbers;

console.log(a, b, c);
