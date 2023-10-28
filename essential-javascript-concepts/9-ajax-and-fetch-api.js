// AJAX and Fetch API:
// Making HTTP Requests with AJAX:
// AJAX (Asynchronous JavaScript and XML) is a set of techniques that allow web applications to make asynchronous requests to a server. You can use the XMLHttpRequest object to perform AJAX requests.

// Here's a simple example of making an AJAX GET request to fetch data from a server:
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  }
};

xhr.send();
