class Animal {
  makeSound() {
    console.log("Some generic animal sound...");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof! 🐶");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow! 🐱");
  }
}

class Bird extends Animal {
  makeSound() {
    console.log("Chirp! 🐦");
  }
}

// Using Polymorphism
const animals = [new Dog(), new Cat(), new Bird()];

animals.forEach((animal) => {
  animal.makeSound(); // Same function call, different output!
});
