// SHORTHAND FOR INITIALIZING PROPERTY VALUES

// function getCar(make, model, year) {
//   return {
//     make: make,
//     model: model,
//     year: year,
//   };
// }

function getCar(make, model, year) {
  return {
    make, // make: make,
    model,
    year,
  };
}

console.log(getCar("daihatsu", "asdf", 1999));

// SHORTHAND FOR WRITING METHODS
// ES5
var server = {
  name: "Server",
  restart: function () {
    console.log("The" + this.name + " is restarting...");
  },
  stop: function () {
    console.log("The" + this.name + " is stopping...");
  },
};

const serverES6 = {
  name: "Server",
  restart() {
    console.log(`The ${this.name} is restarting...`);
  },
};

serverES6.restart();

// COMPUTED PROPERTY KEY
const fieldName = "city";

const formData = {
  firstName: "Hou",
  lastName: "Chia",
  [fieldName]: "Cleveland",
};

console.log(formData);
