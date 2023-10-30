function myFunction() {
  const message = document.getElementById("text");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if (x.trim() == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (error) {
    message.innerHTML = "Input is " + error;
  }
}

// JavaScript Throws Errors
// When an error occurs, JavaScript will normally stop and generate an error message.

// The technical term for this is: JavaScript will throw an exception (throw an error).

// JavaScript will actually create an Error object with two properties: name and message.

// The throw Statement
// The throw statement allows you to create a custom error.

// Technically you can throw an exception (throw an error).

// The exception can be a JavaScript String, a Number, a Boolean or an Object: