// Functions:
// Function Declaration and Expression:
// Function Declaration:
// A function declaration defines a named function that can be called later in your code. It consists of the function keyword, followed by a function name, a list of parameters enclosed in parentheses, and the function body enclosed in curly braces.
function greet(name) {
  console.log('Hello, ' + name);
}

greet('John');


// Function Expression:
// A function expression defines an anonymous function that can be assigned to a variable. It's defined within an expression, typically as part of a variable assignment.
const greet1 = function (name) {
  console.log('Hello, ' + name);
}

greet1('Lee');


// Parameters and Arguments:
// Parameters:
// Parameters are placeholders in a function's definition that allow you to pass values into the function. They are listed inside the parentheses when you declare a function and act as variables within the function.

// Arguments:
// Arguments are the actual values that you pass to a function when you call it. These values are assigned to the function's parameters.
greet1('Dar');


// Return Statements:
// A return statement is used to specify the value that a function should return when it's called. A function can return a value to the caller, and this value can be used in other parts of your code.
function add(a, b) {
  return a + b;
}
console.log(add(5, 5));


// Function Scope and Closures:
// Function Scope:
// Variables declared within a function are typically scoped to that function. This means they are not accessible from outside the function.
function sayHello() {
  console.log('Hello');
}
sayHello();


// Closures:
// Closures occur when a function "remembers" its lexical scope, even when it's called outside that scope. This allows inner functions to access variables and parameters of their containing function.
function outerFunction() {
  let outerVar = "I am from outer!";

  function innerFunction() {
    console.log(outerVar);
  }

  return innerFunction();
}

outerFunction();


// In this example, innerFunction still has access to outerVar even after it has been returned from outerFunction.

// Understanding functions, their parameters, return statements, and scope, including closures, is crucial for organizing and structuring your code effectively in JavaScript. Functions allow you to encapsulate and reuse code, making your programs more modular and maintainable.






// Exercise 1: Function Declaration and Expression

// 1. Write a function declaration called greet that takes a name as a parameter and logs "Hello, [name]!" to the console.

// 2. Write a function expression called multiply that multiplies two numbers and returns the result.


// 1. Function Declaration
function greet(name) {
  console.log('Hello, ' + name)
}

greet('Dale');

// 2. Function Declaration (anonymous function)
const multiply = function (num1, num2) {
  return num1 * num2;
}

console.log(multiply(5, 5));


// Exercise 2: Parameters and Arguments

// 1. Define a function getFullName that takes two parameters, firstName and lastName, and returns the full name.

// 2. Call the getFullName function with your first name and last name as arguments and log the result.

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

console.log(getFullName('John','Caballero'));


// Exercise 3: Return Statements

// 1. Create a function square that takes a number as an argument and returns its square.

// 2. Call the square function with a number and log the result.

function square(number) {
  return number ** 2;
}

console.log(square(6));


// Exercise 4: Function Scope and Closures

// Create a function outer that defines a variable outerVar. Inside outer, define an inner function inner that logs the value of outerVar.

// Call the outer function and store the returned inner function in a variable. Then, call the inner function.
function outerFunc() {
  let variable = 'inner';

  function innerFunc() {
    console.log(variable);
  }

  return innerFunc();
}

outerFunc();


// These exercises should help you practice working with function declarations, expressions, parameters, return statements, function scope, and closures in JavaScript. Functions are a fundamental building block of JavaScript, and mastering them is essential for writing complex and organized code.