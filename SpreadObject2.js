const student = {
  name: "Tamim",
  age: 25,
  profession: "Bekar Programmer",
  address: {
    city: "Sylhet",
    villge: "Toyeb kamal",
  },
  phone: "01700000000",
};

// console.log(student.age);
const student1 = { ...student }; //? Spread operator
student1.name = "shikder";
student1.upZilla = "South Surma";
// console.log(student);
// console.log(student1);
