// Error Handling:
// try...catch Statements:
// In JavaScript, you can use try...catch statements to handle exceptions, which are runtime errors that can occur in your code. This allows you to gracefully manage errors without crashing your application.

// Here's the basic syntax of a try...catch statement:
// try {
  
// } catch (error) {
  
// }

// -The code inside the try block is the code that might throw an exception.
// -If an exception occurs, the control flow jumps to the catch block.
// -The catch block accepts an error parameter, which contains information about the exception.

// Handling and Throwing Exceptions:
// You can throw custom exceptions using the throw statement. This allows you to create your own error messages or conditions.
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  let result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error("An error occurred:", error.message);
}
