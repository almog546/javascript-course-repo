import { BASE_API_URL, convertCurrency } from "./utilities.js";

const phpAmount = convertCurrency(300);
console.log(phpAmount)

fetch(`${BASE_API_URL}/todos/1`)
  .then((res) => res.json())
  .then((data) => console.log(data));
