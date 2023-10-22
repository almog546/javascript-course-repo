const btnElement = document.getElementById("btn");
const textElement = document.getElementById("text");

function showMessage () {
  textElement.textContent = "Changed!";
  textElement.classList.add("paragraph-color")
}

btnElement.addEventListener("click", showMessage);

// const btnElement = document.getElementById("btn");
// const textElement = document.getElementById("text");

// btnElement.addEventListener("click", function () {
//   textElement.textContent = "Text changed.";
// });
