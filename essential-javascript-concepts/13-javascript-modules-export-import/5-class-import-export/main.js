import * as Guitars from "./guitars.js";
import User from "./user.js"

const user = new User("email@gmail.com", "John")
console.log(user)
console.log(user.greeting())

console.log(Guitars.playGuitar());
console.log(Guitars.shredding());
console.log(Guitars.plucking());
