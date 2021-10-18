const repeated = "hello world ".repeat(5);
console.log(repeated);
console.log("hello".indexOf("l"));
console.log("hello".includes("asdfsf"));

// ES5
// var greeting = "hello";
// var name = "Hou";

// var sayHello = greeting + " " + name;
// console.log(sayHello);

// ES6
// const greeting = "hello";
// const name = "Hou";

// const sayHello = `The greeting say: ${greeting} ${name}`;
// console.log(sayHello);

const multiLineString = `
Hello,
my friend,
how are you, doing?
`;

console.log(multiLineString);

// Challenge: Rewrite the following to ES6
const greeting = "Good morning";
const weather = "sunny";

// ES5
const sentence =
  greeting + ", how are you doing? The weather is " + weather + " today.";

// ES6

const sentenceES6 = `${greeting}, \`asdf\` how are you doing? The weather is ${weather} today.`;

console.log({ sentenceES6 });
