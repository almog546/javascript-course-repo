async function todoList() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  ).then((res) => {
    return res.json();
  });
  console.log(response)
}

todoList();
