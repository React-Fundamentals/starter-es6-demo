// DESTRUCTURING OBJECTS

const person = {
  name: "Hou Chia",
  title: "software engineer",
  city: "Brooklyn,NY",
  age: 32,
};

//ES5
// var name = person.name;
// var title = person.title;
// var city = person.city;
// var age = person.age;

//ES6
// const { name, title: job, city, age } = person;
// console.log(name, job, city, age);

// const state = { id: 1, coins: ["bitcoin", "ethereum"], error: null };
// // print "ethereum" to the console using object destructuring
// const { coins } = state;
// console.log(coins[1]);

// DESTRUCTURING ARRAYS
const letters = ["a", "b", "c"];

// no array destructuring/ES5
// var firstLetter = letters[0];
// var secondLetter = letters[1];
// var thirdLetter = letters[2];

// array destructuring/ES6
const [firstLetter, secondLetter, thirdLetter, fourthLetter = "d"] = letters;
console.log(firstLetter);

// DESTRUCTURING PARAMETERS

// ES5
const introduce = (name, title, city, age) => {
  return `Hello, my name is ${name}, and I'm a ${title}. I live in ${city}, and I'm ${age} years old.`;
};
introduce("Hou", "software engineer", "Brooklyn, NY", 32);

// ES6
const personTwo = {
  name: "Hou Chia",
  title: "software engineer",
  city: "Brooklyn,NY",
  age: 32,
};

const introduceES6 = ({ title, age, name, city }) =>
  `Hello, my name is ${name}, and I'm a ${title}. I live in ${city}, and I'm ${age} years old.`;

console.log(introduceES6(personTwo));
