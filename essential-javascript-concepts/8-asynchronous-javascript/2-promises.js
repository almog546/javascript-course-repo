// Promises:
// Promises are a more structured and powerful way to work with asynchronous code. A Promise represents a value that may not be available yet but will be at some point.

function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data from " + url;
      resolve(data);
    }, 2000);
  });
}

fetchData("www.google.com")
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.log('something went wrong!')
  });

  // In this example, the fetchData function returns a Promise that resolves with the data. You can use .then() to handle the resolved value and .catch() for error handling.