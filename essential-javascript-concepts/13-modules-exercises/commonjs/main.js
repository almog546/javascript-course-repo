// Exercise 1: CommonJS Modules

// 1. Create a CommonJS module named math.js that exports a function called add which takes two parameters and returns their sum.

// 2. In a separate file named main.js, import the add function from the math.js module and use it to add two numbers. Print the result to the console.

const math = require('./math')
console.log(math.add(1, 1))