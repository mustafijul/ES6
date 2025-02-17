//* Single or one parameter
const doubleIt = (x) => x * 2;
const result = doubleIt(10);
// console.log(result);

//* No parameter
const getPi = () => Math.PI;
// console.log(getPi());

//* Large arrow function a return use korte hobe
const doMath = (a, b, c) => {
  const sum = a + b + c;
  const mul = a * b * c;
  const result = sum + mul;
  return result;
};
console.log(doMath(2, 3, 4));
// ! TASK : REGULAR FUNCTION VS ARROW FUNCTION
