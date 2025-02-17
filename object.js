//* Object is a collection of key (also called property) value pairs

//* Basic examples

const honda = {
  brand: "suzuki",
  price: 120000,
  color: "black",
  speed: 150,
  car: (bmw = {
    price: 10000000,
  }),
  greet: function () {
    console.log("Allahu akbar");
  },
};

// console.log(honda);
// console.log(honda.car.price);
// console.log(honda.greet());

//*  This is "for in loop" used for shoeings the value of the key of an obj

// for (const val in honda) {
//   console.log(val);
// }
