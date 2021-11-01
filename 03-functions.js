// ES5
console.log(printName("Hou", "Chia"));

// function printName(firstName, lastName) {
//   return firstName + " " + lastName;
// }

var printName = function (firstName, lastName) {
  return firstName + " " + lastName;
};

// var anotherPrintName = printName("Hou", "Chia");
// var yetAnotherPrintName = function () {
//   return printName("Hou", "Chia");
// };
// ES6 Arrow functions
const printName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

// printName = (number1, number2) => {
//   return number1 + number2;
// };

const printNameRefactored = (firstName, lastName) => `${firstName} ${lastName}`;

console.log({
  printNameRefactored: printNameRefactored("Hou", "chia"),
});
// console.log(printName("Hou", "Chia"));
// console.log(printName("Jane", "Doe"));

// Challenge: Refactor the following function to use arrow syntax

// function add(a, b = 1) {
//   return a + b;
// }

let add = (a, b = 10) => a + b;
console.log(add(1));
