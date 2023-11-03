// ES6+ Features:
// Arrow Functions:
// Arrow functions provide a concise way to write anonymous functions. They are often used for short, one-line functions and have a simpler syntax compared to traditional function expressions.

// Syntax:
const add = (a, b) => a + b;

// Template Literals:
// Template literals (also called template strings) allow you to create strings with embedded expressions. They are enclosed in backticks (`) and can contain placeholders for variables or expressions using ${}.

// Syntax:
const name = "John";
const greeting = `Hello, ${name}!`;

console.log(greeting);

// Destructuring:
// Destructuring allows you to extract values from objects or arrays and assign them to variables using a shorter and more convenient syntax.

// Object Destructuring:
const person = { name1: "Alice", age1: 30 };
const { name1, age1 } = person;

console.log(name1);
console.log(age1);

// Array Destructuring:
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;

console.log(first);

// Spread/Rest Operators:
// The spread operator (...) is used to expand an iterable (like an array) into individual elements, while the rest operator is used to collect multiple elements into an array.

// Spread Operator:
const defaultColors = ["red", "yellow"];
const userColors = ["blue", "yellow"];
const allColors = [...defaultColors, ...userColors, "orange"];

console.log(allColors);

//rest
function sum(a, b, ...restExam) {
  console.log(restExam);
}

//list of item converted into array
sum(1, 2, 3, 4, 5);

