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






// Exercise 1: Conditional Statements

// 1. Write an if statement to check if a given number num is positive. If it's positive, log "Number is positive" to the console.

// 2. Extend the previous code to include an else statement that logs "Number is not positive" if the number is not positive.

// Answers for Exercise 1:
let num1 = 5;
if (num1 > 0) {
  console.log('Number is positive');
} else {
  console.log('Number is not positive');
}


// Exercise 2: Switch Statement

// 1. Create a switch statement that takes a variable day and logs the corresponding message for the day of the week (e.g., "Monday", "Tuesday", etc.).
// Answers for Exercise 2:
let day = 'Monday';
switch (day) {
  case 'Monday':
    console.log('Monday');
    break;
  case 'Tuesday':
    console.log('Tuesday');
    break;
  default:
    console.log('Not valid day');
}


// Exercise 3: Loops

// 1. Use a for loop to print even numbers from 1 to 10.

// 2. Use a while loop to count down from 5 to 1, and log each number.

// Answers for Exercise 3:
for (let numbers = 0; numbers <= 10; numbers+=2) {
  console.log(numbers);
}

let num2 = 5;
while (num2 >= 1) {
  console.log(num2);
  num2--;
}


// Exercise 4: Ternary Operator

// Use the ternary operator to determine whether a given number x is even or odd and log the result.
x = 10 % 2 == 0 ? console.log('even') : console.log('odd');


// These exercises should help you practice using conditional statements, switch statements, loops, and the ternary operator in JavaScript. Understanding these control structures is essential for building dynamic and responsive code.