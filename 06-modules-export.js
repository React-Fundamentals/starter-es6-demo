// Modules are a programming pattern that allow you to abstract code, encapsulate code, reuse code, and manage dependencies. Before ES6, we used CommonJS, which used `require` and `module.exports` to define dependencies and modules. ES6 natively uses import/export keywords.

// NAMED EXPORTS
export function sayHi(greeting, name) {
  console.log(`Hello, ${name}!`);
}

export const person = {
  firstName: "Hou",
  lastName: "Chia",
};

export let greetingInMandarin = "Ni hao";

// DEFAULT EXPORT
export default function ToDoList() {
  return <h1>My ToDo List</h1>;
}

export default function ToDoListTwo() {
  return <h1>My ToDo List</h1>;
}