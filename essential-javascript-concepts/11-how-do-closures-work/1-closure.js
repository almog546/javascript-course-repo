function getGreeter() {
  const greeting = 'hello'

  return (name) => `${greeting} ${name}`
}

const greet = getGreeter()
console.log(green('John'))