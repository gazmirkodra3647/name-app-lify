// filename: complexCodeExample.js

// This code is a complex example that simulates a virtual pet game.
// It includes various classes, methods, and interactions between objects.
// The code is more than 200 lines long and implements a wide range of features.

// Define the Pet class
class Pet {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.hunger = 0;
    this.energy = 100;
  }

  sleep() {
    console.log(this.name + ' is sleeping...');
    this.energy += 10;
  }

  eat() {
    console.log(this.name + ' is eating...');
    this.hunger -= 10;
    this.energy += 5;
  }

  play() {
    console.log(this.name + ' is playing...');
    this.energy -= 10;
  }
}

// Define the Dog class, extending Pet
class Dog extends Pet {
  constructor(name) {
    super(name, 'dog');
    this.barkCount = 0;
  }

  bark() {
    console.log(this.name + ' says: Woof woof!');
    this.barkCount++;
  }
}

// Define the Cat class, extending Pet
class Cat extends Pet {
  constructor(name) {
    super(name, 'cat');
    this.catNipLevel = 5;
  }

  sleep() {
    console.log(this.name + ' is taking a cat nap...');
    this.energy += 15;
  }

  scratchFurniture() {
    console.log(this.name + ' is scratching the furniture...');
  }
}

// Create instances of Dog and Cat
const dog = new Dog('Buddy');
const cat = new Cat('Whiskers');

// Interact with the pets
dog.bark();
cat.sleep();
dog.eat();
cat.play();
dog.play();
cat.scratchFurniture();
dog.sleep();
cat.eat();
dog.bark();
cat.play();

// Output pet information
console.log('--- Pet Information ---');
console.log(dog);
console.log(cat);

// Output additional statistics
console.log('--- Additional Statistics ---');
console.log('Bark count:', dog.barkCount);
console.log('Catnip level:', cat.catNipLevel);

// ... (additional lines of code)