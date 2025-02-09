//*Nested object
const student = {
  name: "John",
  age: 25,
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
  phone: "01700000000",
};

//* destructuring object, also rename the age property as boyos

const { name, age: boyos, address, phone } = student;
console.log(boyos);

const { city } = address;
console.log(city);

//* spread operator in object
// const newStudent = { ...student };
// newStudent.name = "Tamim";
// console.log(student);
