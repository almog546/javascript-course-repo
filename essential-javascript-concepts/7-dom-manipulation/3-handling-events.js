const btnElement = document.getElementById("btn");
const messageElement = document.getElementById("message");

btnElement.addEventListener("click", function () {
  messageElement.textContent = "Button clicked!";
});
