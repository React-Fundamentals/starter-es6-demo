// SHORTHAND FOR INITIALIZING PROPERTY VALUES
// function getCar(make, model, year) {
//   return {
//     make: make,
//     model: model,
//     year: year,
//   };
// }

// function getCar(make, model, year) {
//   const cost = 100;
//   return {
//     make,
//     model,
//     year,
//     cost,
//   };
// }

// console.log(getCar());

// SHORTHAND FOR WRITING METHODS
// ES5
// var server = {
//   name: "Server",
//   restart: function () {
//     console.log("The" + this.name + " is restarting...");
//   },
//   stop: function () {
//     console.log("The" + this.name + " is stopping...");
//   },
// };

// ES6
// const server = {
//   name: "Server",
//   restart() {
//     console.log(`The ${this.name} is restarting...`);
//   },
//   stop() {
//     console.log(`The ${this.name} is stopping...`);
//   },
// };

// COMPUTED PROPERTY KEY
const fieldName = "location";

const formData = {
  firstName: "Hou",
  lastName: "Chia",
  [fieldName]: "Cleveland",
};

console.log(formData.location);
