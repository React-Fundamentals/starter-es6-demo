import fetch from "node-fetch";

// ES5
function fetchTrivia() {
  fetch("https://opentdb.com/api.php?amount=1&category=18")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// fetchTrivia();

async function fetchTriviaWithAsyncAwait() {
  try {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=1&category=18"
    );
    console.log("in between fetch and response.json()");
    const data = await response.json();
    console.log(data);
    console.log("hello world 3");
  } catch (error) {
    console.log(error);
  }
}

fetchTriviaWithAsyncAwait(); // data
console.log("hello world");
console.log("hello world 2");
