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

// export default function ToDoListTwo() {
//   return <h1>My ToDo List</h1>;
// }
