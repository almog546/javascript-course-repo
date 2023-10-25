// Exercise 3: async/await

// 1. Refactor the simulateAsyncOperation function to use async/await. Create an async function that awaits the asynchronous operation and returns the result.

// 2. Use the async function to display the result, and handle any errors using try...catch.

async function simulateAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Operation Completed!";
      reject(data);
    }, 2000);
  });
}

async function fetchDataAndDisplay() {
  try {
    const data = await simulateAsyncOperation();
    console.log(data);
  } catch (error) {
    console.log("Opsss something went wrong! " + error);
  }
}

fetchDataAndDisplay();
