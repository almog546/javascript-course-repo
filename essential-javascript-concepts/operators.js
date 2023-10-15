// Operators:

// Arithmetic Operators (+, -, *, /, %):
// 1. Addition (+): The addition operator is used to add two numbers or concatenate two strings.
let sum = 1 + 1;
let message = "Hello, " + "World";
console.log(sum + " " + message);



// 2. Subtraction (-): The subtraction operator is used to subtract one number from another.
let difference = 10 - 4;
console.log(difference);



// 3. Multiplication (*): The multiplication operator is used to multiply two numbers.
let product = 5 * 5;
console.log(product);



// 4. Division (/): The division operator is used to divide one number by another.
let quotient = 15 / 3;
console.log(quotient);



// 5. Modulus (%): The modulus operator returns the remainder of a division operation.
let remainder = 17 % 5;
console.log(remainder);






// Comparison Operators (==, ===, !=, !==, >, <, >=, <=):
// 1. Equality (==): The equality operator checks if two values are equal. It performs type coercion, so it may not be suitable for strict comparisons.
console.log(5 == '5');



// 2. Strict Equality (===): The strict equality operator checks if two values are equal without type coercion.
5 === 5; //true
5 === "5"; //false



// 3. Inequality (!=): The inequality operator checks if two values are not equal. It performs type coercion.
5 != "10"; //true



// 4. Strict Inequality (!==): The strict inequality operator checks if two values are not equal without type coercion.
5 !== 10; //true
5 !== "5"; //true



// 5. Greater Than (>) and Less Than (<): These operators check if one value is greater than or less than another value.
10 > 5; //true
3 < 2; //false



// 6. Greater Than or Equal To (>=) and Less Than or Equal To (<=): These operators check if one value is greater than or equal to or less than or equal to another value.
10 >= 10; //true
3 <= 2; //false







// Logical Operators (&&, ||, !):

// 1. Logical AND (&&): The logical AND operator returns true if both operands are true.
true && true; //true
true && false; //false



// 2. Logical OR (||): The logical OR operator returns true if at least one of the operands is true.
true || false; //true
false || false; //false



// 3. Logical NOT (!): The logical NOT operator negates the value of its operand.
!true; //false
!false; //true



// Understanding and using these operators is essential for making decisions, performing calculations, and controlling the flow of your JavaScript code. These operators are fundamental building blocks for writing complex programs.







// Exercise 1: Arithmetic Operators

// 1. Calculate the sum of 10 and 15.
// 2. Calculate the product of 7 and 4.
// 3. Find the difference between 20 and 8.
// 4. Calculate the result of dividing 50 by 5.
// 5. Find the remainder when 25 is divided by 7.

let sum1 = 10 + 15;
console.log(sum1);

let product1 = 7 * 4;
console.log(product1);

let difference1 = 20 - 8;
console.log(difference1);

let divisionResult = 50 / 5;
console.log(divisionResult);

let remainderResult = 25 % 7;
console.log(remainderResult);




// Exercise 2: Comparison Operators

// 1. Check if 12 is equal to "12" (use both == and ===).
// 2. Check if 3 is not equal to "3" (use both != and !==).
// 3. Check if 8 is greater than 5.
// 4. Check if 4 is less than or equal to 4.

console.log(12 == "12");
console.log(3 != "3");
console.log(3 !== "3");
console.log(8 > 5);
console.log(4 <= 4);





// Exercise 3: Logical Operators

// 1. Check if both true and true is true using the logical AND operator.
// 2. Check if either true or false is true using the logical OR operator.
// 3. Check if false is true using the logical NOT operator.

console.log(true && true);
console.log(true || false);
console.log(false != true);



// These exercises should help you practice using arithmetic, comparison, and logical operators in JavaScript. Understanding these operators is crucial for writing effective and efficient code.