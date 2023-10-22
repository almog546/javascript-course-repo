const promise = new Promise((resolve, reject) => {
  resolve("we did it baby")
})

promise.then((data) => {
  console.log(data)
})