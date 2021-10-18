// ARROW FUNCTIONS

// ES5
// var printName = function (firstName, lastName) {
//   return firstName + " " + lastName;
// };

// ES6
// const printName = (firstName, lastName) => {
//   return `${firstName} ${lastName}`;
// };

// implicit return
const printName = (firstName, lastName) => `${firstName} ${lastName}`; // same as lines 9 - 11
console.log(printName("Hou", "Chia"));

// Challenge: Refactor the following function to use arrow syntax

// function add(a, b = 1) {
//   return a + b;
// }

const add = (a, b = 1) => a + b;

console.log(add(5));
