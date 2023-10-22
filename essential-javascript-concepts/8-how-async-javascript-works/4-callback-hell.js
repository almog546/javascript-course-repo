function first() {
  console.log(1)
}

// it uses setTimeout with a delay of 0 milliseconds.
function second(callback, callback2) {
  setTimeout(() => {
    console.log(2)
    callback()
    callback2()
  }, 0)
}

function third() {
  console.log(3)
}

first()
second(third, first)

