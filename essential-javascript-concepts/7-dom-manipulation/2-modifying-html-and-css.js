const demoElement = document.getElementById("demo");
const btnElement = document.getElementById("btn");

function changeTextAndStyle() {
  demoElement.textContent = "Text changed!";
  demoElement.classList.add("highlighted");
}

btnElement.addEventListener("click", changeTextAndStyle);

