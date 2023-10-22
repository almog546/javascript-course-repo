const promise = new Promise((resolve, reject) => {
  reject({user: "Helena"});
});

promise
  .then((data) => {
    const user = data
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
  })
  .then((todos) => {
    console.log(todos)
  })
  .catch(err => {
    console.log(err)
  });
