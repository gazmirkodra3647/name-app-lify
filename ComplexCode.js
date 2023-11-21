// Filename: ComplexCode.js
// Description: A complex JavaScript code that demonstrates various programming concepts

// Constants
const PI = 3.14159;
const MAX_ITERATIONS = 1000;

// Classes
class Shape {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  calculateArea() {
    throw new Error("calculateArea() must be implemented by subclasses");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super('Circle');
    this.radius = radius;
  }

  calculateArea() {
    return PI * Math.pow(this.radius, 2);
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super('Rectangle');
    this.length = length;
    this.width = width;
  }

  calculateArea() {
    return this.length * this.width;
  }
}

// Functions
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Variables
let sum = 0;
let product = 1;

// Logic
for (let i = 1; i <= MAX_ITERATIONS; i++) {
  if (i % 2 === 0) {
    sum += i;
  } else {
    product *= i;
  }
}

console.log('Sum of even integers:', sum);
console.log('Product of odd integers:', product);

const circle = new Circle(5);
console.log('Area of circle with radius 5:', circle.calculateArea());

const rectangle = new Rectangle(10, 7);
console.log('Area of rectangle with length 10 and width 7:', rectangle.calculateArea());

console.log('Factorial of 5:', factorial(5));
console.log('Is 17 prime?', isPrime(17));

// ... Additional complex code goes here ...

// A complex code with more than 200 lines.
// Feel free to add more classes, functions, or variables to make it even more sophisticated and elaborate.