// var animal;
// var flower;

// console.log("hello world");

// console.log("hello world 2");
// console.log("hello world 3");

// VARIABLES UPDATE
// ES5
var color = "orange";
var color = "yellow";
var color = 2;
console.log(color);

// ES6
let anotherColor = "green";
// let anotherColor = "blue";
anotherColor = 2;
console.log({ anotherColor });

const yetAnotherColor = "pink";
yetAnotherColor = "red";
console.log({ yetAnotherColor });

const computerType = "Macintosh";
const computer = {
  type: computerType,
  os: "Catalina",
};

computer.type = "Microsoft";
computer.os = "Windows 10";
computer.creator = "Bill Gates";
// computer = {};
console.log(computer);

// VARIABLE SCOPES
let fruit = "apple";
let fruitEaten = 3;
console.log({ fruit1: fruit });

if (true) {
  let fruit = "Banana";
  console.log({ fruit2: fruit });
  if (fruitEaten > 1) {
    let fruit = "orange";
    console.log({ fruit3: fruit });
    var varFruit = "peach";
    const constFruit = "strawberry";
  }
}

console.log({ constFruit });

// VARIABLE HOISTING
console.log({ animal });
var animal = "rabbit";
var flower = "rose";

// console.log({ abc });

console.log({ anotherAnimal });
let anotherAnimal = "chicken";

console.log({ flower });
const flower = "rose";

// FUNCTION SCOPE
function example() {
  console.log({ varExampleString });
  let letExampleString = "letExampleString";
  const constExampleString = "constExampleString";
  var varExampleString = "varExampleString";
}

// if (true) {
//   var varExampleString = "varExampleString"; // won't care about block scope
//   let letExampleString = "letExampleString"; // cares about block scope
//   const constExampleString = "constExampleString"; // cares about block scope
// }

example();
// console.log({ constExampleString });
// console.log({ letExampleString });
// console.log({ varExampleString });
