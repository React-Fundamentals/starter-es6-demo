// REST ...
// const pairs = {
//   a: 10,
//   b: 20,
//   c: 30,
//   d: 40,
//   e: 50,
// };

// Create a new object that contains c, d, and e key value pairs
// {
//   c: 30,
//   d: 40,
//   e: 50,
// };

// ES5
// const newObject = {};
// newObject.c = pairs.c;
// newObject.d = pairs.d;
// newObject.e = pairs.e;
// console.log(newObject);

// const { a, b, d, ...newObject } = pairs;
// console.log(newObject);

// SPREAD ...
// const person = { name: "Hou", title: "software engineer" };

// const personalInfo = { age: 32, location: "Brooklyn, NY" };

// const employee = {
//   id: 1,
//   name: "Jane",
//   department: "engineering",
//   ...person,
//   ...personalInfo,
// };

// console.log("employee:", employee.name);

const student = {
  firstName: "Hou",
  lastName: "Chia",
  title: "student",
  location: {
    city: "Cleveland",
    state: "OH",
    zipcode: 44114,
  },
};

const studentClone = {
  ...student,
  location: { ...student.location },
  firstName: "HouClone",
  lastName: "ChiaClone",
};

studentClone.location.city = "Miami";

console.log(student.location.city);
