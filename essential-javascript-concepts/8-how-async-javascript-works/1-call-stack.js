// How Async Javascript works (Callback Hell, Promises, Async Await, Call Stack and more)
// https://youtu.be/1Z7FjG--F20?si=zjEOhE3Ta8lM_9WB

console.log("message")
logger()

function logger() {
  console.log(2)
  finish()
  console.log(3)
  function finish() {
    console.log("finished")
  }
}