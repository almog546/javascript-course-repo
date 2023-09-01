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

const numbers = [10, 20, 30, 40, 50];

const filteredNumbers = numbers.filter((number, index) => index % 2 == 0);

console.log(filteredNumbers);
