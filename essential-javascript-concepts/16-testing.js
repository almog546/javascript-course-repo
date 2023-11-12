// jest documentation: https://jestjs.io/docs/getting-started

// Testing is an essential part of software development, and it helps ensure that your code functions correctly and reliably. In this beginner's guide, we'll focus on unit testing using the Jest testing framework, which is one of the most popular and beginner-friendly testing tools for JavaScript.

// Unit Testing with Jest:
// What is Unit Testing?
// Unit testing is the practice of testing individual components or units of your code in isolation to ensure they work as expected. These units are typically functions or small pieces of code. The goal is to verify that each unit of your code behaves correctly.

// Getting Started with Jest:
// Jest is a widely-used testing framework for JavaScript. It's known for its simplicity and ease of use. To get started with Jest, follow these steps:

// 1. Install Jest:

// You can install Jest as a development dependency using npm:
// npm install --save-dev jest

// 3. Create a Test File:

// Write your tests in a separate file with a .test.js or .spec.js extension. For example, if you want to test a math.js file, create a math.test.js file.

// 4. Write Test Cases:

// In your test file, write test cases using Jest's testing functions like test() and expect(). Here's a simple example:

// math.js
// function add(a, b) {
//   return a + b;
// }

// module.exports = add;

// math.test.js
// const add = require('./math');

// test('adds 1 + 2 to equal 3', () => {
//   expect(add(1, 2)).toBe(3);
// });

// 5. Run Tests:

// To run your tests, you can use the npx command or add a script to your package.json:

// "scripts": {
//   "test": "jest"
// }

// Then run your tests using:

// npm test

// Test Structure:
// Jest provides a straightforward and descriptive syntax for writing tests. Some common testing functions and matchers include:

// test() or it(): Define a test case.
// expect(): Create an assertion.
// toBe(): Compare values for strict equality.
// toEqual(): Compare objects or arrays for deep equality.
// toBeTruthy(): Assert a value is truthy.
// toBeFalsy(): Assert a value is falsy.
// not.toBe(): Inverse of toBe().
// toThrow(): Assert that a function throws an exception.
// toContain(): Check if an array or string contains a specific value.

