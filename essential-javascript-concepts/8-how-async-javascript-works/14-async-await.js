async function todoList() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("something went wrong...");
    console.log(err);
  }
}

todoList();

// remember new version or some browsers no need to include this code:
// async function todoList() {

// }

// todoList();
