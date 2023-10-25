function simulateAsyncOperation(callback) {
  setTimeout(() => {
    const data = "Operation completed!"
    callback(data)
  }, 2000);
}

simulateAsyncOperation((callback) => {
  console.log(callback)
})