// Fetch API JavaScript in Easiest way | Fetch API Tutorial
// https://youtu.be/Pnlt1NiBt68?si=Jki0VP3FUvvRGFBr
// https://jsonplaceholder.typicode.com

// fetch in long method:
fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
