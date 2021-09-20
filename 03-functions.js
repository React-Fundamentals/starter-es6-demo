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
