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
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchTriviaWithAsyncAwait();
