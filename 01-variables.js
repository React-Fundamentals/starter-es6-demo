// VARIABLE UPDATES
// ES5
var color = "red";
var color = "yellow";
var color = 2;
console.log({ color });

// ES6 - LET
let anotherColor = "red";
// let anotherColor = "green";
anotherColor = "blue";
anotherColor = 23;
console.log({ anotherColor });

// ES6 - CONST
const yetAnotherColor = "pink";
// yetAnotherColor = "orange";
// console.log({ yetAnotherColor });

const computer = {
  type: "Macintosh",
  os: "Catalina",
};

computer.type = "Microsoft";
computer.os = "Windows 10";
computer.creator = "Bill Gates";

console.log(computer);

// computer = {};

// const computer2 = computer;
// console.log({ computer2 });

/** 
  VARIABLE SCOPE
*/
// let fruit = "apple";
// let fruitEaten = 3;

// if (fruitEaten > 2) {
//   let fruit = "orange";
//   let anotherFruit = "pineapple"; // block-scoped
//   const constantFruit = "watermelon"; // block-scoped
//   var yetAnotherFruit = "grapes"; // global-scoped
//   console.log({ fruit });
// }

// console.log({ constantFruit });

// let shouldEatFruit = true;
// if (shouldEatFruit) {
//   let fruit = "orange";
//   const anotherFruit = "apple";
//   console.log("fruit inside block: ", fruit);
//   console.log("anotherFruit inside block: ", anotherFruit);
// }

// console.log("fruit outside block: ", fruit);
// console.log("anotherFruit outside block:", anotherFruit);

// VARIABLE HOISTING
console.log({ animal });
var animal = "rabbit";

// console.log({ anotherAnimal });
// let anotherAnimal = "chicken";

console.log({ flower });
const flower = "rose";
