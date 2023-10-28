async function showUserInConsole() {
  const user = await fetch("user.json");
  const json = await user.json();
  const username = await json.username
  console.log(username)
}

showUserInConsole();
