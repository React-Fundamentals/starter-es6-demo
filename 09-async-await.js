import fetch from "node-fetch";

// ES5
// function fetchTrivia() {
//   fetch("https://opentdb.com/api.php?amount=1&category=18")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

// fetchTrivia();

// ES6 Async/await
async function fetchTrivia() {
  try {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=1&category=18"
    );
    const data = await response.json();

    // const responseTwo = await fetch(data); // make another async call
  } catch (error) {
    console.log(error);
  }
}

fetchTrivia();
