const allMovies = document.getElementsByClassName("movieCards");

for (var i = 0; i < allMovies.length; i++) {
  allMovies[i].addEventListener("click", (e) => {
    var movieId = e.srcElement.getAttribute("data-id");
    console.log(movieId);
  });
}
