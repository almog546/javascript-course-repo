// Conditional Statements

// to run in terminal type "node index"
// This tells Node.js to execute the index.js file.
// let x = 10
// let y = 6

// if(x < 11){
//   console.log("x < 11")
// } else if (x == 9) {
//   console.log("x == 9>")
// } else {
//   console.log("x > 11")
// }

// Switch Statement
// const day = 'Wednesday';

// switch (day) {
//   case 'Monday':
//     console.log("Its Monday");
//     break;
//   case 'Tuesday':
//     console.log("Its Tuesday");
//     break;
//   case 'Wednesday':
//     console.log("Its Wednesday");
//     break;
//   case 'Thursday':
//     console.log("Its Thursday");
//     break;
//   case 'Friday':
//     console.log("Its Friday");
//     break;
//   default:
//     console.log("Enjoy the Weekend")
//     break;
// }

// String Methods

// The trim() method removes whitespace from both sides of a string:
// let text1 = "    Hello World!     ";
// console.log(text1.trim());

// The replace() method replaces a specified value with another value in a string:
// let text = 'Please learn Python'
// console.log(text.replace('Python', 'JavaScript'));

// Array
// let myList = []; //empty array
// let go = () => console.log("Hello World");

// myList = [
//   "banana",
//   3,
//   go,
//   ["John", "Lee"],
//   { firstname: "John", lastname: "Smith" },
// ];

// console.log(myList[3][1]);
// console.log(myList[4].firstname);
// console.log(myList[2]);

// console.log(myList[1] = 1); // update array

// The most common question in job interviews is about array methods

// Clone of myList
// let myList = [1, 2, 3, 4, 5, 6, 7];

// let newList = [];

// newList = myList;

// console.log(newList);

// using map() method

let myList = [1, 2, 3, 4, 5, 6, 7];

newList = myList.map(number => number + 10);

console.log(newList);