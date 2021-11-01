// DESTRUCTURING OBJECTS
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

const { name: employeeName, title, city, age } = person;
// let { name, title, city, age } = person;
console.log(employeeName, title, city, age);

const state = { id: 1, coins: ["bitcoin", "ethereum", "a", "b"], error: null };
// print "ethereum" to the console using object destructuring
const {
  coins: [, second, , fourth],
} = state;

// console.log(coins[1]);
console.log({ second, fourth });

// DESTRUCTURING ARRAYS
const letters = ["a", "b", "c"];

// No array destructuring/ES5
// var firstLetter = letters[0];
// var secondLetter = letters[1];
// var thirdLetter = letters[2];

let [firstLetter, secondLetter, thirdLetter, fourthLetter = "d"] = letters;
console.log({ firstLetter, secondLetter, thirdLetter, fourthLetter });

// DESTRUCTURING FUNCTION PARAMETERS
var introduce = function (name, title, city, age) {
  return `Hello, my name is ${name}, and I'm a ${title}. I live in ${city}, and I'm ${age} years old.`;
};
console.log(introduce("Hou", "Brooklyn, NY", "software engineer", 32));

// ES6
const personTwo = {
  city: "Brooklyn,NY",
  name: "Hou Chia",
  title: "software engineer",
  age: 32,
};

function introduceES6({ title, city, age, name }) {
  return `Hello, my name is ${name}, and I'm a ${title}. I live in ${city}, and I'm ${age} years old.`;
}

console.log(introduceES6(personTwo));

const student = {
  name: "Hou",
  location: {
    zipcode: 44114,
    // city: "Cleveland",
  },
};

// print "Cleveland" to the console
// console.log(student.location.city);

// if (student.location && !student.location.city) {
//   var studentCity = "Miami";
// }

const {
  location: { city: studentCity = "Miami" },
} = student;
// const { city } = location;

console.log({ studentCity });
