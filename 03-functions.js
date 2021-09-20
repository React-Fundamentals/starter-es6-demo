// ARROW FUNCTIONS
// ES5
// var printName = function (firstName, lastName) {
//   return firstName + " " + lastName;
// };

// ES6
// const printName = (firstName, lastName) => {
//   return `${firstName} ${lastName}`;
// };

const printName = (firstName = "John", lastName = "Doe") =>
  `${firstName} ${lastName}`;

// console.log(printName("Hou", "Chia"));

console.log(printName("Hou"));

// Challenge: Refactor the following function to use arrow syntax

// function add(a, b = 1) {
//   return a + b;
// }

const add = (a, b = 1) => a + b;

console.log(add(1));
