// ES6+ Features:
// Arrow Functions:
// Arrow functions provide a concise way to write anonymous functions. They are often used for short, one-line functions and have a simpler syntax compared to traditional function expressions.

// Syntax:
const add = (a, b) => a + b;

// Template Literals:
// Template literals (also called template strings) allow you to create strings with embedded expressions. They are enclosed in backticks (`) and can contain placeholders for variables or expressions using ${}.

// Syntax:
const name = "John";
const greeting = `Hello, ${name}!`;

console.log(greeting);

// Destructuring:
// Destructuring allows you to extract values from objects or arrays and assign them to variables using a shorter and more convenient syntax.

// Object Destructuring:
const person = { name1: "Alice", age1: 30 };
const { name1, age1 } = person;

console.log(name1);
console.log(age1);

// Array Destructuring:
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;

console.log(first);

// Spread/Rest Operators:
// The spread operator (...) is used to expand an iterable (like an array) into individual elements, while the rest operator is used to collect multiple elements into an array.

// Spread Operator:
const defaultColors = ["red", "yellow"];
const userColors = ["blue", "yellow"];
const allColors = [...defaultColors, ...userColors, "orange"];

console.log(allColors);

//rest
function sum(a, b, ...restExam) {
  console.log(restExam);
}

//list of item converted into array
sum(1, 2, 3, 4, 5);

// Classes and Inheritance:
// ES6 introduced the class syntax for defining classes, making it easier to work with object-oriented programming in JavaScript. Classes provide a more structured and organized way to create constructor functions and prototypes.

// Class Definition:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

// In this example, we've defined a Person class with a constructor method that initializes the name and age properties. It also has a sayHello method to introduce the person.

// You can create instances (objects) of this class like this:

const person1 = new Person("John", 20);
const person2 = new Person("Helena", 30);

person1.sayHello();
person2.sayHello();

// Inheritance:

// Inheritance is a way to create a new class based on an existing class. It allows you to reuse the properties and methods of a parent class in a child class. Here's an example:
class Student extends Person {
  constructor(name, age, school) {
    super(name, age); // Call the parent class constructor
    this.school = school;
  }

  study() {
    console.log(`${this.name} is studying at ${this.school}`);
  }
}

// In this example, we've created a Student class that extends the Person class. It inherits the name, age, and sayHello method from the parent class. We've added a new property, school, and a study method specific to students.

// You can create instances of the Student class and use both inherited and new methods:

const student1 = new Student("Anthony", 69, "Ateneo");
student1.sayHello();
student1.study();

// In this way, classes and inheritance help you structure your code, make it more organized, and promote reusability, which is essential in building complex JavaScript applications.

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const animal1 = new Animal("Lucky");
const dog1 = new Dog("Labrador");

animal1.speak();
dog1.speak();

// These are some of the key ES6+ features that have become fundamental in modern JavaScript development. They provide more concise and efficient ways to write code and help you build more organized and maintainable applications.

// Exercise 1: Arrow Functions

// Create an arrow function called add that takes two parameters and returns their sum.
const sum1 = (num1, num2) => num1 + num2;

console.log(sum1(1, 1));

// Exercise 2: Template Literals

// Create a template literal that generates a message with the user's name and a welcome greeting.
let myName = "John";
let myGreet = `Hello my name is ${myName}`;

console.log(myGreet);

// Exercise 3: Destructuring

// Create an object representing a person with properties name, age, and city.

// Use destructuring to extract and assign the values of these properties to separate variables.
const personInfo = { nameInfo: "Lee", ageInfo: 30, cityInfo: "Manila" };
const { nameInfo, ageInfo, cityInfo } = personInfo;

console.log(nameInfo, ageInfo, cityInfo);

// Exercise 4: Spread/Rest Operators

// Create two arrays, fruits1 and fruits2, each containing a list of fruits.

// Use the spread operator to combine these arrays into a single array called allFruits.
const fruitsOne = ["Banana", "Pineapple"];
const fruitsTwo = ["Apple", "Avocado"];

const allFruits = [...fruitsOne, ...fruitsTwo];

console.log(allFruits);

// Exercise 5: Classes and Inheritance

// Create a class called Vehicle with a constructor that takes make and model properties.

// Create a subclass called Car that extends Vehicle and has an additional property year.

// Create an instance of Car and log its properties.
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model);
    this.year = year;
  }
}

const car1 = new Car("BMW", "1 Series", 2013);

console.log(car1);


// These exercises should help you practice and solidify your understanding of ES6+ features in JavaScript. These features are widely used in modern JavaScript development and can make your code more concise and expressive.