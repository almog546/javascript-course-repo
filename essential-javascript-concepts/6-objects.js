// Objects:
// Creating Objects:
// An object in JavaScript is a collection of key-value pairs. You can create objects using curly braces {} and populate them with properties and methods.
let person = {}; // empty objects

// objects with properties
let book = {
  title: "JavaScript for Beginner to Professional",
  author: "Laurence Lars Svekis",
  year: 2021
};

// Object Properties and Methods:
// Objects can have properties (variables) and methods (functions) associated with them. You can access and manipulate these properties and methods using dot notation or square brackets.

// Accessing object properties
console.log(book.title); // Access the 'title' property
console.log(book["author"]); // Access the 'author' property using square brackets

// Adding a method to an object
book.displayInfo = function() {
  return `Title: ${this.title} Author: ${this.author} Year: ${this.year}`;
};
console.log(book.displayInfo());





// Object-Oriented Programming (OOP) Concepts:
// JavaScript supports object-oriented programming (OOP) principles, including encapsulation, inheritance, and polymorphism. Objects can be used to model real-world entities and create reusable code.

// Encapsulation:
// Encapsulation involves bundling data (properties) and the methods that operate on that data into a single unit, an object.
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  start: function() {
    return "engine started.";
  }
};

console.log(car.start())


// Inheritance:
// Inheritance allows objects to inherit properties and methods from other objects, creating a hierarchy of objects.

// Creating objects with inheritance
let vehicle = {
  type: "Vehicle",
  start: function() {
    console.log("Engine started.");
  }
};

let car1 = Object.create(vehicle);
car1.brand = "Ford";
car1.model = "Mustang";

console.log(car1);
car1.start();

// JSON (JavaScript Object Notation):
// JSON is a lightweight data-interchange format used for data storage and exchange. JSON is often used to represent objects and data in a structured format.
// {
//   "name": "John",
//   "age": 30,
//   "city": "New York"
// }

// In JavaScript, you can parse JSON strings into objects and stringify objects into JSON strings using the JSON.parse() and JSON.stringify() methods.
let jsonString = '{"name":"John","age":30,"city":"New York"}';

let jsonObject = JSON.parse(jsonString); // convert string into object
console.log(jsonObject.name);
console.log(jsonObject);

let jsonFromObject = JSON.stringify(jsonObject); // convert object into string
console.log(jsonFromObject);

// Understanding objects, their properties, methods, and object-oriented programming concepts is crucial for building complex and organized code in JavaScript. JSON is widely used for data exchange between web servers and clients.






// Exercise 1: Creating Objects

// 1. Create an object called student with properties for name, age, and grade. Populate these properties with your own information.
// let student = {
//   name: 'John',
//   age: 20,
//   grade: 'B'
// }

// Exercise 2: Object Properties and Methods

// 1. Add a method to the student object called getInfo that returns a string with the student's name, age, and grade.

// 2. Access and log the student's age and call the getInfo method to log their information.
let student = {
  name: 'John',
  age: 20,
  grade: 'B',
}

student.getInfo = function () {
  return `Name: ${this.name} Age: ${this.age} Grade: ${this.grade}`
}

console.log(student.age);
console.log(student.getInfo());


// Exercise 3: Inheritance (Object Hierarchy)

// 1. Create a vehicle object with properties type and start method.

// 2. Create a car object that inherits from vehicle and has additional properties for brand and model.

// 3. Call the start method on both vehicle and car objects.

// 1. Creating a 'vehicle' object
let vehicle2 = {
  type: 'vehicle',
  start: function () {
    console.log('Engine started.')
  }
}

// 2. Creating a 'car' object that inherits from 'vehicle'
let car2 = Object.create(vehicle2);
car2.brand = 'Toyota'
car2.model = 'Civic'
console.log(car2)

// 3. Calling the 'start' method on 'vehicle' and 'car'
vehicle2.start()
car2.start()



// Exercise 4: JSON (JavaScript Object Notation)

// 1. Create a JSON string representing information about a product.

// 2. Parse the JSON string into a JavaScript object and log the product details.
let productJSON1 = '{"name": "Capacitor","price": "19.99","category": "Electronics"}';

let productObject = JSON.parse(productJSON1);
console.log(productObject.name)
console.log(productObject)


// These exercises should help you practice creating objects, working with object properties and methods, understanding inheritance, and using JSON for data representation. Objects and object-oriented programming concepts are fundamental to building structured and organized code in JavaScript.