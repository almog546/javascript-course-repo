function first() {
  console.log(1)
}

// it uses setTimeout with a delay of 0 milliseconds.
function second() {
  setTimeout(() => {
    console.log(2)
  }, 0)
}

function third() {
  console.log(3)
}

first()
second()
third()

// The key takeaway here is that JavaScript handles asynchronous operations like setTimeout by scheduling them to run later, and the order of execution is influenced by the event loop and the overall program flow. This is why you see 1 and 3 logged before 2, even though 2 is scheduled to run with minimal delay.