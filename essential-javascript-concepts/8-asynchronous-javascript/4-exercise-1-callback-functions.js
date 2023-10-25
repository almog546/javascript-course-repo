// 1. Create a function called simulateAsyncOperation that takes a callback function as an argument. Inside simulateAsyncOperation, use setTimeout to simulate an asynchronous operation that takes 2 seconds to complete. After 2 seconds, call the callback function with the string "Operation completed!".

function simulateAsyncOperation(callback) {
  setTimeout(() => {
    const data = "Operation completed!"
    callback(data)
  }, 2000);
}

simulateAsyncOperation((callback) => {
  console.log(callback)
})