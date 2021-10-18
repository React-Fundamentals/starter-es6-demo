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

// ES5
// var newObject = {};
// newObject.c = pairs.c;
// newObject.d = pairs.d;
// newObject.e = pairs.e;
// console.log(newObject);

const { a, b, ...newObject } = pairs;
console.log(newObject);

// SPREAD ...
const person = { name: "Hou", title: "software engineer" };

const personalInfo = { name: "asdf", age: 32, location: "Brooklyn, NY" };

// ES5
// var employee = {
//   name: person.name,
//   title: person.title,
//   age: personalInfo.age,
//   location: personalInfo.location,
// };

const employee = {
  name: "John",
  ...person,
  ...personalInfo,
};

console.log(employee.name);

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

console.log(studentClone);
studentClone.location.city = "Miami";

console.log(student.location.city);
