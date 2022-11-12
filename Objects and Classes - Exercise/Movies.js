function movies(arr) {
  let array = arr;
  let listOfMovies = [];

  for (el of array) {
    if (el.includes("addMovie")) {
      let nameOfMovie = el.split("addMovie ")[1];
      listOfMovies.push({ name: nameOfMovie });
    } else if (el.includes("directedBy")) {
      let info = el.split(" directedBy ");
      let name = info[0];
      let director = info[1];

      let movie = listOfMovies.find((movieObj) => movieObj.name === name);
      if (movie) {
        movie.director = director;
      }
    } else if (el.includes("onDate")) {
      let info = el.split(" onDate ");
      let name = info[0];
      let date = info[1];

      let movie = listOfMovies.find((movieObj) => movieObj.name === name);
      if (movie) {
        movie.date = date;
      }
    }
  }
  for (movie of listOfMovies) {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  }
}
movies([
  "addMovie Fast and Furious",

  "addMovie Godfather",

  "Inception directedBy Christopher Nolan",

  "Godfather directedBy Francis Ford Coppola",

  "Godfather onDate 29.07.2018",

  "Fast and Furious onDate 30.07.2018",

  "Batman onDate 01.08.2018",

  "Fast and Furious directedBy Rob Cohen",
]);
