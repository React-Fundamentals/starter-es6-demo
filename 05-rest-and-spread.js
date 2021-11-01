// REST ...
const pairs = {
  a: 10,
  b: 20,
  c: 30,
  d: 40,
  e: 50,
};

// Create a new object that contains c, d, and e key value pairs
// {
//   c: 30,
//   d: 40,
//   e: 50,
// };

//ES5
// var newObject = {};
// newObject.c = pairs.c;
// newObject.d = pairs.d;
// newObject.e = pairs.e;
// console.log(newObject);

//ES6
const { a, b, d, ...newObject } = pairs;
console.log({ a, b, d, newObject });

// SPREAD ...

// ES5
// var employee = {
//   name: person.name,
//   title: person.title,
//   age: personalInfo.age,
//   location: personalInfo.location,
// };
const person = { name: "Hou", title: "software engineer" };
const personalInfo = { age: 32, location: "Brooklyn, NY" };

const employee = {
  ...person,
  ...personalInfo,
  name: "John",
};

console.log(employee);

const student = {
  firstName: "Hou",
  lastName: "Chia",
  title: "student",
  location: {
    city: "Cleveland",
    state: "OH",
    zipcode: 44114,
    obj: {
      name: "asdf",
    },
  },
};

const studentClone = {
  ...student,
  location: { ...student.location, obj: { ...student.location.obj } },
};

studentClone.firstName = "John";
studentClone.location.city = "Miami";
// console.log(studentClone);
console.log(student.location.city);
