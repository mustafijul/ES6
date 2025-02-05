const student = {
  name: "John",
  age: 25,
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
  phone: "01700000000",
};

//* destructuring object

const { name, age, address, phone } = student;
const { city } = address;
console.log(city);

//* spread operator in object
// const newStudent = { ...student };
// newStudent.name = "Tamim";
// console.log(student);
