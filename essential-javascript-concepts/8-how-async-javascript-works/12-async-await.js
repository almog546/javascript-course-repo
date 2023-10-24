async function todoList() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  console.log(response)
}

todoList()