// Control Structures:
// Conditional Statements (if, else if, else):
// Conditional statements allow you to execute different blocks of code based on specified conditions. The primary conditional statements in JavaScript are if, else if, and else.

// if statement:
// The if statement executes a block of code if a specified condition is true.
if (5 == 5) {
  console.log("its equal to: 5");
}

// else if statement:
// The else if statement allows you to specify additional conditions to test if the initial if condition is false.
if (false) {
  console.log("false");
} else if (true) {
  console.log("true");
}

// else statement:
// The else statement specifies a block of code to be executed if none of the conditions in the if and else if statements are true.
if (false) {
  console.log("false");
} else {
  console.log("true");
}

// Switch Statements:
// The switch statement is used to select one of many code blocks to be executed, depending on the value of an expression.
switch ("Tuesday") {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  default:
    console.log("Its Weekend");
    break;
}

// Loops (for, while, do-while):
// Loops are used to repeatedly execute a block of code as long as a specified condition is true or for a specified number of iterations.

// for loop:
// The for loop is used for iterating over a range of values.
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// while loop:
// The while loop executes a block of code as long as a specified condition is true.
let count = 0;
while (count <= 6) {
  console.log(count);
  count++;
}

// do-while loop:
// The do-while loop is similar to the while loop, but it guarantees that the code block is executed at least once before the condition is checked.
let num = 0;
do {
  console.log(num);
  num++;
} while (num <= 7);

// Ternary (Conditional) Operator:
// The ternary operator provides a concise way to write conditional statements in a single line.
true ? console.log('true') : console.log('false');

let isEven = 8 % 2 == 0 ? console.log('Even') : console.log('Odd');


// These control structures are essential for making decisions, performing repetitive tasks, and writing more complex and flexible JavaScript programs. They help you control the flow of your code and make it responsive to different conditions and situations.