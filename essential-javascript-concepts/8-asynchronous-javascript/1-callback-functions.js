// Asynchronous JavaScript:
// Asynchronous JavaScript is crucial for performing tasks that take time to complete, such as network requests, file operations, and user interactions. It allows your code to continue executing other tasks while waiting for these time-consuming operations to finish.

// Callback Functions:
// Callback functions are a fundamental way to handle asynchronous operations in JavaScript. A callback is a function that is passed as an argument to another function and is executed when the other function has completed its task.
function fetchData(url, callback) {
  // Simulating a network request
  setTimeout(() => {
    const data = "Data from " + url;
    callback(data);
  }, 2000); // Simulate a 2-second delay
}

function displayData(data) {
  console.log(data);
}

fetchData("www.google.com", displayData);

// In this example, the fetchData function simulates a network request and calls the displayData callback when the data is ready.