// Fetch API JavaScript in Easiest way | Fetch API Tutorial
// https://youtu.be/Pnlt1NiBt68?si=Jki0VP3FUvvRGFBr
// https://jsonplaceholder.typicode.com


// fetch in short method:
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data));
