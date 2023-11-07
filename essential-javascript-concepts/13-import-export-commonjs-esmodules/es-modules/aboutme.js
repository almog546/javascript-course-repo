// es module

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

export default {
  person,
  printName,
  printRole
}
