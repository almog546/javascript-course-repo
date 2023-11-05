// CommonJS
// Basic Usage

const person = {
  name: "John",
  role: "Frontend Engineer",
};

function printName() {
  console.log(person.name);
}

function printRole() {
  console.log(person.role);
}

module.export = {
  person,
  printName,
  printRole,
};
