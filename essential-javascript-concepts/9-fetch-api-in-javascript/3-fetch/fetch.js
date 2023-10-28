fetch("user.json")
  .then((response) => response.json())
  .then((json) => json.displayName.toUpperCase())
  .then((displayNameUppercase) => console.log(displayNameUppercase))
  .catch((err) => console.log("something went wrong: " + err));
