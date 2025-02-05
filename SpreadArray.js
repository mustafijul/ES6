// const number1 = [1, 2, 3, 4, 5];
// const number2 = [1, 2, 3];

// The main purpose of using the spread operator is to store the value
// of an array in a new array. It is used to store the value of an array

const number1 = [1, 2, 3, 4, 5];
const number2 = [...number1];
number1.push(9);
number2.push(10);
console.log(number1);
console.log(number2);
