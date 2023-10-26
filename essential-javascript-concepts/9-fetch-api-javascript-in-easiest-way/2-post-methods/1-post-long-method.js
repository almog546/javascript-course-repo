// Fetch API JavaScript in Easiest way | Fetch API Tutorial
// https://youtu.be/Pnlt1NiBt68?si=Jki0VP3FUvvRGFBr
// https://jsonplaceholder.typicode.com


// post easy to read
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
