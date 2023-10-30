// Throw, and Try...Catch...Finally
// The try statement defines a code block to run (to try).

// The catch statement defines a code block to handle any error.

// The finally statement defines a code block to run regardless of the result.

// The throw statement defines a custom error.

// Errors Will Happen!
// When executing JavaScript code, different errors can occur.

// Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseeable things.

try {
  addalert("Welcome guest!");
} catch (error) {
  document.getElementById("demo").innerHTML = error.message;
}

// JavaScript try and catch
// The try statement allows you to define a block of code to be tested for errors while it is being executed.

// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

// The JavaScript statements try and catch come in pairs:

// try {
//   Block of code to try
// }
// catch(err) {
//   Block of code to handle errors
// }