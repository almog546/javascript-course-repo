// Exercise 2: Promises

// 1. Create a function called simulateAsyncOperation that returns a Promise. Inside the Promise, use setTimeout to simulate an asynchronous operation that takes 2 seconds to complete. After 2 seconds, resolve the Promise with the string "Operation completed!".

// 2. Use the Promise returned by simulateAsyncOperation to display the result using .then() and handle errors using .catch().

function simulateAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Operation Completed!";
      resolve(data);
    }, 2000);
  });
}

simulateAsyncOperation()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Something went wrong! " + error);
  });
