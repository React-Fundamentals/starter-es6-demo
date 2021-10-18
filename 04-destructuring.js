// Destructuring Objects

const person = {
  name: "Hou Chia",
  title: "software engineer",
  city: "Brooklyn,NY",
  age: 32,
};

// ES5
// var name = person.name;
// var title = person.title;
// var city = person.city;
// var age = person.age;

// ES6
const {
  name: employeeName,
  title: employeeTitle,
  city: employeeCity,
  age,
} = person; // does lines 11 - 14
console.log(employeeName, employeeTitle, employeeCity, age);

const state = { id: 1, coins: ["bitcoin", "ethereum"], error: null };
// print "ethereum" to the console using object destructuring

const {
  coins: [, second],
} = state;
// console.log(state.coins[1]);
// console.log(coins[1]);
console.log(second);

// DESTRUCTURING ARRAYS

const letters = ["a", "b", "c"];

// No array destructuring/ES5
// var firstLetter = letters[0];
// var secondLetter = letters[1];
// var thirdLetter = letters[2];

const [firstLetter, secondLetter, thirdLetter, fourthLetter = "d"] = letters;
console.log(firstLetter, secondLetter, thirdLetter, fourthLetter);

// DESTRUCTURING PARAMETERS

// ES5
var introduce = function (name, title, city, age) {
  return `Hello, my name is ${name}, and I'm a ${title}. I live in ${city}, and I'm ${age} years old.`;
};
console.log(introduce("Hou", "software engineer", "Brooklyn, NY", 32));

// ES6
const personTwo = {
  name: "Hou Chia",
  title: "software engineer",
  city: "Brooklyn,NY",
  age: 32,
};

const introduceES6 = ({ name, title, city, age }) =>
  `Hello, my name is ${name}, and I'm a ${title}. I live in ${city}, and I'm ${age} years old.`;

console.log(introduceES6(personTwo));

const student = {
  name: "Hou",
  location: {
    zipcode: 44114,
    city: "Cleveland",
  },
};

// print "Cleveland" to the console
const {
  location: { city },
} = student;
console.log(city);
