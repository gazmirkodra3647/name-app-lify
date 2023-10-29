// filename: complex_code.js

// This code simulates a virtual shopping cart with multiple features.

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.total = this.price * this.quantity;
  }

  getFullDescription() {
    return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(productName) {
    this.products = this.products.filter(product => product.name !== productName);
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.products.forEach(product => {
      totalPrice += product.total;
    });
    return totalPrice;
  }

  checkout() {
    console.log("Thank you for shopping with us!");
    console.log(`Total price: $${this.getTotalPrice()}`);
    this.products = [];
  }

  printCart() {
    console.log("Your shopping cart:");
    this.products.forEach(product => {
      console.log(product.getFullDescription());
    });
  }
}

// Create instance of ShoppingCart
const cart = new ShoppingCart();

// Add products to the cart
const product1 = new Product("iPhone 12", 999, 1);
const product2 = new Product("AirPods Pro", 249, 2);
const product3 = new Product("Apple Watch", 399, 1);

cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);

// Print current contents of the cart
cart.printCart();

// Remove a product from the cart
cart.removeProduct("AirPods Pro");

// Print updated contents of the cart
cart.printCart();

// Checkout and display total price
cart.checkout();

// Output:
// Your shopping cart:
// Product: iPhone 12, Price: $999, Quantity: 1
// Product: AirPods Pro, Price: $249, Quantity: 2
// Product: Apple Watch, Price: $399, Quantity: 1
// Your shopping cart:
// Product: iPhone 12, Price: $999, Quantity: 1
// Product: Apple Watch, Price: $399, Quantity: 1
// Thank you for shopping with us!
// Total price: $1398