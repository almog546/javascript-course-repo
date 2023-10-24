// Free fake API for testing and prototyping:
// https://jsonplaceholder.typicode.com

fetch('https://jsonplaceholder.typicode.com/todos/1').then((data) => {
  return data.json()
}).then((jsonedData) => {
  console.log(jsonedData)
}).catch(() => {
  console.log("something went wrong!")
}).finally(() => {
  console.log("everything is done...")
})

// what is json()?
// The json() method is a built-in method in JavaScript that is used to parse a JSON string into a JavaScript object.

// what is finally()?
// It's used to specify a function that should be executed regardless of whether the Promise is resolved or rejected.