import convertCurrency, { BASE_API_URL } from "./utilities.js"; // Since convertCurrency is exported by default, you can give it a different name.

const phpAmount = convertCurrency(300);
console.log(phpAmount)

fetch(`${BASE_API_URL}/todos/1`)
  .then((res) => res.json())
  .then((data) => console.log(data));
