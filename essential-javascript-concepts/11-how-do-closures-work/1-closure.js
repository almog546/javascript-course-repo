// function getGreeter() {
//   const greeting = 'hello'

//   return (name) => `${greeting} ${name}`
// }

function getGreeter(greeting = 'hello') {
  return (name) => `${greeting} ${name}`
}


const greet = getGreeter('goodbye')
console.log(greet('John'))