// Arrays:
// Creating Arrays:
// An array is a data structure in JavaScript that can store multiple values. You can create arrays using square brackets [], and you can initialize them with values if needed.

// creating empty array:
let emptyArray = [];

// creating an array with values:
let fruits = ["apple", "banana", "cherry"];


// Accessing Elements:
// You can access elements in an array by using square brackets [] with the index of the element. Note that array indices start at 0.
console.log(fruits[0]);




// Array Methods:
// JavaScript provides various methods for manipulating arrays:

// - push: Adds one or more elements to the end of an array.
fruits.push('date');
console.log(fruits);

// - pop: Removes the last element from an array.
fruits.pop();
console.log(fruits);

// - shift: Removes the first element from an array.
fruits.shift();
console.log(fruits);

// unshift: Adds one or more elements to the beginning of an array.
fruits.unshift('orange');
console.log(fruits);

// - splice: Allows you to add, remove, or replace elements at a specific index in the array.
fruits.splice(1, 1, 'grape');
console.log(fruits);
// splice(1, 1, "grape"): This is a method call on the fruits array.

// 1: The first argument, 1, represents the index at which the modification will start. In JavaScript, array indices are zero-based, so this refers to the second element in the array.

// 1: The second argument, 1, specifies the number of elements to remove starting from the index specified in the first argument. In this case, it's removing one element.

// "grape": The third argument, "grape", is the value that will be inserted at the specified index.




// Iterating Through Arrays:
// You can iterate through the elements of an array using various methods and loops:
// - for Loop:
for (let i = 0; i < fruits.length; i++) {
  console.log(i);
}

// - forEach Method:
fruits.forEach(function(fruit){
  console.log(fruit);
});

// - map Method: Creates a new array by applying a function to each element of an existing array.
let uppercasedFruits = fruits.map(function(fruit) {
  return fruit.toUpperCase();
})

console.log(uppercasedFruits);

// - filter Method: Creates a new array with all elements that pass a test (provided as a function).
let filteredFruits = fruits.filter(function (fruit) {
  return fruit.length > 5;
});

console.log(filteredFruits);
// return fruit.length > 5;: This line within the function is the condition being checked for each element. It checks if the length of the fruit name is greater than 5 characters.

// Understanding arrays, how to create them, access elements, and work with array methods is fundamental for managing collections of data in JavaScript. Arrays are versatile and can be used in various scenarios to store and process data.








// Exercise 1: Creating Arrays

// Create an array called colors with the names of three different colors.
let colors = ['Red', 'Green', 'Blue'];


// Exercise 2: Accessing Elements

// 1. Access the second element of the colors array.
// 2. Access the last element of the colors array.
console.log(colors[1]);
console.log(colors[2]);


// Exercise 3: Array Methods

// 1. Add "yellow" to the end of the colors array using the push method.
// 2. Remove the last color from the colors array using the pop method.
colors.push('yellow');
console.log(colors);

colors.pop();
console.log(colors);


// Exercise 4: Iterating Through Arrays

// 1. Use a for loop to iterate through the colors array and log each color to the console.

// 2. Use the forEach method to achieve the same result.
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach(color => {
  console.log(color);
});


// Exercise 5: Array Methods (Map and Filter)

// 1. Use the map method to create a new array containing the lengths of the color names.

// 2. Use the filter method to create a new array with colors that have more than 4 letters.
let colorLength = colors.map(
  color => {
    return color.length
  }
);

console.log(colorLength);
console.log(colors);


let colorLetters = colors.filter(
  color => {
    return color.length > 4
  }
);

console.log(colorLetters);
console.log(colors);


// These exercises should help you practice working with arrays, accessing elements, using array methods, and iterating through arrays in JavaScript. Arrays are a powerful tool for managing collections of data in your code.