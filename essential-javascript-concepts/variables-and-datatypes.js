// Variables and Data Types:
// Understanding Variable Declaration (var, let, const):
// In JavaScript, variables are used to store and manage data. You can declare variables using three different keywords: var, let, and const.

// 1. var: Before ES6 (ECMAScript 6), var was the primary way to declare variables. Variables declared with var have function scope or global scope but not block scope. This means they are accessible throughout the function or globally, regardless of where they are declared. However, they are subject to hoisting.
// var name = "John";




// 2. let: Introduced in ES6, let allows you to declare variables with block scope. Block scope means that the variable is limited to the block (typically enclosed in {}) where it is defined. Variables declared with let are not hoisted.
// let age = 20;



// 3. const: Like let, const was also introduced in ES6, and it's used to declare variables with block scope. However, const variables cannot be reassigned after they're initialized. It's a good choice for values that should not change.
// const pi = 3.14159;









// Data Types (string, number, boolean, object, null, undefined):
// JavaScript has several basic data types:

// 1. String: Used to represent textual data. Strings are enclosed in single or double quotes.
// let name = "Lee";




// 2. Number: Used to represent numeric values, including integers and floating-point numbers.
// let age = 30;
let price = 1.69;



// 3. Boolean: Represents a binary value – true or false. Used for logical operations and conditional statements.
// let isStudent = true;



// 4. Object: Objects allow you to group related data and functions together. They are key-value pairs enclosed in curly braces.
// let person = {
//   name: "Bob",
//   age: 30
// };



// 5. Null: Represents the intentional absence of any object value. It's a special value that means "no value" or "nothing."
// let emptyValue = null;



// 6. Undefined: Represents an uninitialized variable or a function that doesn't return anything. It's a special value assigned by JavaScript when a variable is declared but not assigned a value.
// let undefinedVar;







// Type Coercion and Type Conversion:
// Type coercion refers to JavaScript's automatic conversion of data types in certain situations, while type conversion is the explicit conversion of data types by the programmer.

// Example of type coercion:
// let age = 20;
// let ageAsString = "Age: " + age; // Here, age is coerced to a string for concatenation.



// Example of type conversion (explicit):
let stringNumber = "123";
let numericNumber = Number(stringNumber); // Explicitly converting a string to a number.



// Understanding variable declaration, data types, and type coercion/conversion is crucial for working effectively with JavaScript. It allows you to manage data, control the flow of your program, and make your code more robust.








// Exercise 1: Variable Declaration

// 1. Declare a variable name and set its value to your name.
let name = "John";

// 2. Declare a variable age and set its value to your age.
let age = 20;

// 3.  Declare a constant variable PI and set its value to 3.14159.
const pi = 3.14159;





// Exercise 2: Data Types

// 1. Create a variable message and assign it a string value.
let message = "Hello Lord";

// 2. Create a variable quantity and assign it a numeric value.
let quantity = 1;

// 3. Create a variable isStudent and assign it a boolean value.
let isStudent = true;

// 4. Create an object person with properties name and age.
// let person = {
//   name: "John",
//   age: 20
// }

// 5. Create a variable emptyValue and set it to null.
let emptyValue = null;

// 6. Create a variable undefinedVar without assigning any value.
let undefinedVar;





// Exercise 3: Type Coercion and Conversion

// Declare a variable numString and assign it the string "42".
let numString = "42";

// Declare a variable numValue and use type conversion to convert numString to a number.
let numValue = Number(numString);

// Create a string by concatenating numValue with the string " is the answer to everything."
console.log(numValue + " is the answer to everything");