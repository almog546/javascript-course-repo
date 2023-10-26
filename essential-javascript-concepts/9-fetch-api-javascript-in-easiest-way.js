// Fetch API JavaScript in Easiest way | Fetch API Tutorial
// https://youtu.be/Pnlt1NiBt68?si=Jki0VP3FUvvRGFBr
// https://jsonplaceholder.typicode.com

// fetch in long method:
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// fetch in short method:
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data));

// post method 2
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     userId: 11,
//     title: "title test",
//     body: "body test",
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// post method 1
const data = {
  userId: 11,
  title: "title test",
  body: "body test",
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((res) => res.json())
  .then((json) => console.log(json));
