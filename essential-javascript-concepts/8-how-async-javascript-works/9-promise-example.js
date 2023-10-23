const promise = new Promise((resolve, reject) => {
  resolve({ user: "Helena" });
});

promise
  .then((data) => {
    const user = data;
    return fetch("https://jsonplaceholder.typicode.com/todos/1");
  })
  .then((todos) => {
    console.log(todos);
  })
  .catch((err) => {
    console.log(err);
  });

// explained in real-world scenario:

// Imagine you're making a promise to your friend, Helena, to help her with a task. You're promising to assist her in fetching a to-do list from a remote service. Here's how it translates:

// Creating a Promise (Promise Creation):

// You make a promise to Helena. You're telling her, "I promise to help you fetch your to-do list from a remote service."
// javascript
// Copy code
// const promise = new Promise((resolve, reject) => {
//   resolve({ user: "Helena" });
// });
// In this promise, you're saying, "I'm resolving the promise, and here's your name, 'Helena.'"
// Promise Chaining (.then()):

// You're explaining the steps you'll take to fulfill your promise. First, you'll get Helena's name from the resolved promise.
// Then, you'll use her name to request her to-do list from an online service.
// javascript
// Copy code
// promise
//   .then((data) => {
//     const user = data; // You get Helena's name from the resolved promise.
//     return fetch("https://jsonplaceholder.typicode.com/todos/1"); // You fetch Helena's to-do list.
//   })
// Think of it as you telling Helena, "Now that I have your name, I'll use it to fetch your to-do list."
// Fetching Data (External Request):

// After getting Helena's name, you use it to request her to-do list from an online service (a simplified representation of fetching data from the internet).
// javascript
// Copy code
// .then((todos) => {
//   console.log(todos); // You receive and log Helena's to-do list.
// })
// When you successfully retrieve her to-do list, you say, "Here is your to-do list, Helena," and you log it.
// Handling Errors (.catch()):

// If there's any problem during the process—like the internet connection is lost or Helena's to-do list can't be found—you catch the error and let Helena know.
// javascript
// Copy code
// .catch((err) => {
//   console.log(err); // You handle and log any errors that occur.
// });
// This part is like telling Helena, "Oops, something went wrong. I couldn't get your to-do list, and here's what went wrong."
// So, in simple terms, you made a promise to help Helena get her to-do list. You're following a sequence of steps to fulfill that promise. If everything goes well, you'll give her the to-do list. If there are any issues, you'll let her know what went wrong.