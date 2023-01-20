let moviesInStock = [
  "The Godfather",
  "The Dark Knight",
  "Goodfellas",
  "Jaws",
  "Alien",
  "Titanic",
];

let movieSearched = document.getElementById("userInput");
let button = document.getElementById("btn");
let searchedResult = document.getElementById("searchResults");

button.addEventListener("click", function () {
  let movies = movieSearched.value;
  // console.log(movies);

  for (i = 0; i < moviesInStock.length; i++) {
    if (movieSearched.value.toLowerCase() === moviesInStock[i].toLowerCase()) {
      // console.log(`${movies} is in stock!!! You can rent it!`);

      let header = document.createElement("h1");
      header.innerText = movies + ` is in stock!!! You can rent it!`;
      header.style.color = "green";

      searchedResult.appendChild(header);
      movieSearched.value = "";
      break;
    }
    if (movieSearched.value.toLowerCase() !== moviesInStock[i].toLowerCase()) {
      if (i === moviesInStock.length - 1) {
        // console.log(`${movies} is not in stock!!! You can't rent it!`);

        header = document.createElement("h1");
        header.innerText = `${movies} is not in stock!!! You can't rent it!`;
        header.style.color = "red";

        searchedResult.appendChild(header);
        movieSearched.value = "";
      }
    }
  }
});
