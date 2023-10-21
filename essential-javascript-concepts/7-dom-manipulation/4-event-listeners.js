const addBtnElement = document.getElementById("addBtn");
const removeBtnElement = document.getElementById("removeBtn");
const messageElement = document.getElementById("message");

function showMessage() {
  messageElement.textContent = "Even listener added!";
}

function removeMessage() {
  messageElement.textContent = "Even listener removed!";
}

addBtnElement.addEventListener("click", showMessage);
removeBtnElement.addEventListener("click", removeMessage);
