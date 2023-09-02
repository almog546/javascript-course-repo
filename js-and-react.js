// Functions in JavaScript:
// Defining Functions:
// A function is a block of code that performs a specific task. In JavaScript, you can define functions using the function keyword. Functions can take inputs, called parameters, and return outputs using the return statement.

// Example of a simple function:

// function greet(name) {
//   return `Hello, ${name}`;
// }

// console.log(greet("John"));

// Arrow Functions:
// Arrow functions are a more concise way to define functions, often used in React.

// Example of an arrow function:

// const greet = (name) => `Hello, ${name}`;

// console.log(greet("John"));

// Multi-line Arrow Functions:
// For more complex functions that span multiple lines, you can use curly braces {} and include a return statement:

// const calculateRectangleArea = (width, height) => {
//   const area = width * height;
//   return area;
// };

// console.log(calculateRectangleArea(5, 8));

// Returning Objects:
// When you want to return an object literal from an arrow function, you need to wrap the object in parentheses to avoid confusion with the function body's curly braces:

// const createPerson = (name, age) => ({name: name, age: age});
// console.log(createPerson('John', 20))

// Exercises:
// Functions:
// Write a function to calculate the area of a rectangle given its width and height.

// create function to calculate the area
// of a rectangle given its width and height.

// const calculateArea = (width, height) => width * height;
// console.log(calculateArea(5, 8))

// What is map()?

// Think of an array like a list of things.
// The map() function helps you go through each thing in the list and do something to it.
// How does map() work?

// You tell map() what you want to do to each thing by giving it a function.
// This function takes one thing, changes it the way you want, and gives back the changed thing.

// const newArray = oldArray.map(function(currentItem) {
//   // Do something to the currentItem
//   // Return the changed currentItem
// });

// const numbers = [2, 4, 6, 8];

// const doubleNumbers = numbers.map(function (number) {
//   return number * 2; // double the number
// });

// console.log(doubleNumbers);

// Exercise 1: Convert Temperatures

// You have a list of temperatures in Celsius: [0, 10, 20, 30].
// You want to change each temperature to Fahrenheit using the formula: (Celsius * 9/5) + 32.
// Here's how you can use map() to do it:
// let temperatures = [0, 10, 20, 30]; // temperatures in Celsius

// const temperaturesInFahrenheit = temperatures.map(function (celsius) {
//   return (celsius * 9) / 5 + 32; // change each temperature to Fahrenheit
// });

// console.log(temperaturesInFahrenheit);

// Exercise 2: Capitalize Names

// You have a list of names: ["alice", "bob", "charlie"].
// You want to make the first letter of each name uppercase.
// Use map() to achieve this:

// let names = ["alice", "bob", "charlie"];

// const capitalizedNames = names.map(function(name){
//   return name.charAt(0).toUpperCase() + name.slice(1);
// });

// console.log(capitalizedNames);

// map() in arrow function

// let names = ["alice", "bob", "charlie"];

// const capitalizedNames = names.map(
//   (name) => name.charAt(0).toUpperCase() + name.slice(1)
// );

// console.log(capitalizedNames);

// filter()

// Here's the basic syntax of the filter() method using an arrow function:
// const newArray = array.filter(element => condition);

// Example 1: Filtering even numbers

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter((num) => num % 2 == 0);

// console.log(evenNumbers);

// Example 2: Filtering objects based on a property

// const products = [
//   { name: "Apples", category: "Fruit" },
//   { name: "Carrots", category: "Vegetable" },
//   { name: "Bananas", category: "Fruit" },
//   { name: "Broccoli", category: "Vegetable" },
// ];

// const fruits = products.filter(product => product.category == "Fruit");

// console.log(fruits);

// Example 3: Filtering based on array element's index

// In this example, the arrow function filters out elements at even indices, resulting in an array containing elements at indices 0, 2, and 4.

// const numbers = [10, 20, 30, 40, 50];

// const filteredNumbers = numbers.filter((number, index) => index % 2 == 0);

// console.log(filteredNumbers);

// Exercise 1: Filter even numbers

// Given an array of numbers, create a new array that contains only the even numbers.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter((num) => num % 2 == 0);

// console.log(evenNumbers);

// Exercise 2: Filter positive numbers

// Given an array of numbers, create a new array that contains only the positive numbers.

// const numbers = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const positiveNum = numbers.filter(
//   num => num >= 0
// );

// console.log(positiveNum)

// Exercise 3: Filter products by price

// Given an array of products, create a new array that contains only products with a price less than $50.

// const products = [
//   { name: "Laptop", price: 800 },
//   { name: "Phone", price: 400 },
//   { name: "Tablet", price: 120 },
//   { name: "Headphones", price: 60 },
//   { name: "Mouse", price: 20 },
// ];

// const affordableProducts = products.filter((product) => product.price < 50);

// console.log(affordableProducts);

// Exercise 4: Filter strings by length

// Given an array of strings, create a new array that contains only strings with a length greater than 5 characters.

// const words = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

// const shortWords = words.filter((word) => word.length > 5);

// console.log(shortWords);

// Exercise 5: Filter even-indexed elements

// Given an array of numbers, create a new array that contains only elements at even indices (0, 2, 4, etc.).

// const numbers = [10, 20, 30, 40, 50];

// const evenIndices = numbers.filter(
//   (num, index) => index % 2 == 0
// );

// console.log(evenIndices)

// ES6 Classes
// ES6 (ECMAScript 2015) introduced several new features to JavaScript, including the class syntax, which allows you to create and work with classes in a more structured and object-oriented way.

// Defining a Class:
// To define a class in ES6, you use the class keyword followed by the class name. Here's a simple example:

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`my name ${this.name} and I'm ${this.age}`);
//   }
// }

// const person1 = new Person("John", 20);
// const person2 = new Person("Lee", 30);

// console.log(person1.name);
// console.log(person2.age);
// person1.greet();

// Class Inheritance:

// ES6 also supports inheritance, allowing you to create a new class that inherits properties and methods from an existing class. Here's an example:

// What is a Class?
// In JavaScript, a class is like a blueprint for creating objects. Think of it as a template for making things.

// How to Define a Class?
// To create a class, use the class keyword, followed by the class name. Here's a basic example:

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const person1 = new Person("John", 20); // Creating Objects from a Class

// // Accessing Data (Properties)
// console.log(person1);
// console.log(person1.age);
// console.log(person1.name);

// // Inheritance
// // Sometimes, you want to make a new class that's like the old one but with some extra stuff. This is called inheritance.

// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age); // Call the parent class constructor
//     this.grade = grade;
//   }

//   study() {
//     console.log(`${this.name} is studying hard for their exams.`)
//   }
// }

// const student1 = new Student('Anthony', 30, 90);

// console.log(student1);
// console.log(student1.grade);
// student1.study();

// Exercises
// 1. Make a Fruit class with a constructor that takes name as a parameter.
// 2. Create an instance of the Fruit class with the name "Apple."
// 3. Add a method eat to the Fruit class that logs "Yummy, I'm eating an apple!" when called.
// 4. Create a Banana class that inherits from Fruit and has a method peel that logs "I'm peeling a banana!" when called.
// 5. Make an instance of the Banana class and call both the eat and peel methods.

// class Fruit {
//   constructor(name) {
//     this.name = name;
//   }

//   eat() {
//     console.log(`Yummy, I'm eating an ${this.name}`);
//   }
// }

// const fruit1 = new Fruit("Apple");
// console.log(fruit1.name);
// fruit1.eat();

// class Banana extends Fruit {
//   peel() {
//     console.log(`I'm peeling a banana!`);
//   }
// }

// const banana = new Banana();
// banana.peel();

// Destructuring assignment
// Destructuring assignment in JavaScript is a way to extract values from objects or arrays and assign them to variables in a more concise and readable manner.

// Destructuring Objects:
// 1. Object Destructuring:

// const person = {
//   firstName: "John",
//   lastName: "Tom",
//   age: 20,
// };

// const { firstName, lastName, age } = person;

// console.log(firstName);
// console.log(lastName);
// console.log(age);

// Here, we create variables (firstName, lastName, and age) that have the same names as the properties in the person object. The values from the object are automatically assigned to these variables.

// 2. Default Values:
// You can also provide default values in case a property doesn't exist:

// const person = {
//   firstName: "Anthony",
// };

// const { firstName, lastName = "Tony", age = 30 } = person;

// console.log(firstName);
// console.log(lastName);
// console.log(age);

// 3. Renaming Variables:
// You can rename variables while destructuring:

// const person = {
//   firstName: "Sanji",
//   lastName: "Vinsmoke",
// };

// const { firstName: first, lastName: last } = person;

// console.log(first);
// console.log(last);

// Destructuring Arrays:
// 1. Array Destructuring:

// const colors = ["red", "yellow", "green"];

// const [firstColor, secondColor, thirdColor] = colors;

// console.log(firstColor);
// console.log(thirdColor);
// console.log(secondColor);

// 3. Swapping Values:
// Destructuring can be used for variable swapping without a temporary variable:

// let a = 5;
// let b = 10;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// Problem 1: Destructuring an Object

// Given an object representing a book's information:

const book = {
  title: "Clean Code",
  author: "Robert Martin",
  year: 2008,
  rate: 4.8
};

const { title, author, year, rate: star } = book;

console.log(title);
console.log(year);
console.log(star);
