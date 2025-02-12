// Object is a collection of key (also called property) value pairs

// Basic examples

const honda = {
  brand: "suzuki",
  price: 120000,
  color: "black",
  speed: 150,
};

console.log(honda);

//  This is "for in loop" used for accessing the value of the key of an obj
for (const val in honda) {
  console.log(val);
}
