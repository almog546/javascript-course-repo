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

const numbers = [2, 4, 6, 8];

const doubleNumbers = numbers.map(function (number) {
  return number * 2; // double the number
});

console.log(doubleNumbers);
