// SHORTHAND FOR INITIALIZING PROPERTY VALUES

function getCar(make, model, year) {
  return {
    make,
    model,
    year,
  };
}

console.log(getCar("Daihatsu", "ASDF", 1997));

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

// ES6
const serverES6 = {
  name: "Server",
  restart() {
    console.log(`The ${this.name} is restarting...`);
  },
};

serverES6.restart();

// COMPUTED PROPERTY KEY
const fieldName = "location";

const formData = {
  firstName: "Hou",
  lastName: "Chia",
  [fieldName]: "Cleveland",
};

console.log(formData.location);
