// Debugging:

// Using Browser Developer Tools:
// Most modern web browsers come with built-in developer tools that offer a wide range of features for debugging, inspecting, and profiling web applications. Here's a basic overview of how to use these tools:

// 1. Opening Developer Tools:

// In Google Chrome, you can press F12 or Ctrl+Shift+I (or Cmd+Option+I on Mac) to open the Developer Tools.
// In Firefox, press F12 or Ctrl+Shift+I (or Cmd+Option+I on Mac).
// In Microsoft Edge, press F12 or Ctrl+Shift+I (or Cmd+Option+I on Mac).

// 2. Inspecting Elements:
// You can select and inspect elements on the page using the "Elements" or "Inspector" tab. This is helpful for identifying HTML and CSS issues.

// 3. Console Tab:
// The "Console" tab is where you can view and interact with JavaScript code and logs. It's a powerful tool for debugging JavaScript.

// 4. Sources Tab:
// The "Sources" tab allows you to view and debug your JavaScript source code. You can set breakpoints, step through code, and examine variables.

// 5. Network Tab:
// The "Network" tab helps you monitor network requests, view response data, and check for any issues related to data fetching.

// 6. Console Methods:
// Console Methods for Debugging:
// In JavaScript, you can use various console methods to print information, debug code, and catch errors. Here are some common console methods:



// 1. console.log(): Use this method to print messages or variables to the console for basic debugging.
console.log('hello world')

// 2. console.error(): Outputs an error message to the console with a red "error" icon.
console.error('This is an error message')

// 3. console.warn(): Logs a warning message with a yellow "warning" icon.
console.warn('This is an warning message')

// 4. console.info(): Logs an informational message with a blue "info" icon.
console.info('This is an info message')

// 5. console.clear(): Clears the console.
// console.clear()

// 6. console.assert(): Logs a message and asserts that a condition is true. If the condition is false, it logs an error message.
console.assert(1 === 1, 'this is true')
console.assert(1 === 2, 'this is false') // Generates an error message.

// 7. console.group() and console.groupEnd(): Use these methods to group console messages and make them more organized.
console.group('Group 1')
console.log('Message 1')
console.log('Message 2')
console.groupEnd()

// 8. console.table(): Outputs data in a tabular format for better visualization.
const data = [
  { name: 'John', age: 20 },
  { name: 'Helena', age: 30 }
]

console.table(data)

// These console methods are powerful tools for debugging your JavaScript code. They help you log information, catch errors, and inspect variables while developing your web applications.

// By using browser developer tools and console methods effectively, you can identify and fix issues in your code, which is a critical skill for web development.