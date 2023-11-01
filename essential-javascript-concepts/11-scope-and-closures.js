// In JavaScript, scope determines the accessibility and visibility of variables and functions within your code. Understanding scope is essential for managing variable lifetimes and preventing naming conflicts.

// 1. Global Scope:
// Variables declared outside of any function or block are in the global scope. They can be accessed from any part of your code.
// let globalVar = "I'm in global scope";

// function printGlobalVar() {
//   console.log(globalVar);
// }

// printGlobalVar()

// 2. Function Scope:
// Variables declared inside a function are in the function scope. They are accessible only within that function.
Scope: function myFunction() {
  let functionVar = "I'm in function scope";
  console.log(functionVar);
}

myFunction();

// Accessing the 'functionVar' outside will result in an error

// Block Scope:
// Variables declared within a block (enclosed by curly braces) are in block scope. Introduced in ES6, block scope is used with let and const declarations.
function exampleFunction() {
  if (true) {
    let blockVar = "I'm in block scope";
    console.log(blockVar);
  }

  // Accessing 'blockVar' here will result in an error
}

exampleFunction();

// Closures:
// Closures are a powerful concept in JavaScript. A closure is formed when a function "remembers" its surrounding lexical scope even when the function is executed outside that scope. This allows functions to capture and store references to variables from their containing scope, even after that scope has exited.
function outerFunction() {
  let outerVar = "I'm in outerFunction";

  function innerFunction() {
    console.log(outerVar); // 'innerFunction' has access to 'outerVar'
  }

  return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // This still has access to 'outerVar'

// In the example above, innerFunction is a closure because it retains access to outerVar even though outerFunction has completed executing. Closures are particularly useful for maintaining state, encapsulation, and creating private variables.

// Practical use cases for closures include:

// Data encapsulation and information hiding.
// Creating private variables and methods.
// Implementing callbacks and event handlers.
// Managing asynchronous code.
// Understanding scope and closures is vital for writing clean, efficient, and maintainable JavaScript code. They allow you to control variable access and create more modular and organized programs.

// Exercise 1: Scope

// 1. Create a variable globalVar in the global scope and set its value to "Global Scope."

// 2. Create a function exampleFunction that declares a variable functionVar inside it and sets its value to "Function Scope."

// 3. Create a block of code using if and declare a variable blockVar inside it with the value "Block Scope."

// 4. In the global scope, print the values of globalVar, functionVar, and blockVar.

// Answers for Exercise 1:

let globalVar = "Global Scope.";

function exampleFunction() {
  let functionVar = "Function Scope.";
  
  if (true) {
    let blockVar = "Block Scope";
    console.log(blockVar)
  }

  console.log(functionVar)
}

console.log(globalVar);
exampleFunction()



// Exercise 2: Closures

// Create a function called outerFunction that declares a variable outerVar and sets its value to "Outer Variable."

// Inside outerFunction, create a nested function called innerFunction. innerFunction should log the value of outerVar.

// Return innerFunction from outerFunction.

// Call outerFunction and store the result in a variable called myClosure.

// Call myClosure to see if it can still access outerVar.

function outerFunction1() {
  let outerVar = "Outer Variable"

  function innerFunction2() {
    console.log(outerVar)
  }

  return innerFunction2
}

let myClosure1 = outerFunction1()
myClosure1()

// These exercises should help you practice working with scope and closures in JavaScript. Understanding these concepts is essential for writing organized and maintainable code and for handling variable accessibility in different parts of your program.