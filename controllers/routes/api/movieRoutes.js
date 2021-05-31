const router = require("express").Router();
//const Customer = require("../../models/Customer");
// Import the model
const Movie = require("../../../models/Movie");

// Routes not using handlebars
console.log("in movie routes file");
router.post("/", (req, res) => {
  Movie.create({
    movie_id: req.body.movie_id,
    movie_name: req.body.movie_name,
    show_day: req.body.show_day,
    movie_type: req.body.movie_type,
  })
    .then((newMovie) => {
      res.json(newMovie);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.get("/", async (req, res) => {
  try {
    const movieData = await Movie.findAll({});
    if (!movieData) {
      res.status(404).json({ message: "No movie with that id!" });
      return;
    }
    res.status(200).json(movieData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const movieData = await Movie.findByPk(req.params.id);
    if (!movieData) {
      res.status(404).json({ message: "No user with that id!" });
      return;
    }
    res.status(200).json(movieData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Routes using handlebars
// Get all movies
router.get("/", async (req, res) => {
  try {
    const movieData = await Movie.findAll({});
    console.log(movieData);
    const dbMovies = movieData.map((movie) => movie.get({ plain: true }));
    console.log(dbMovies);
    res.render("homepage", { dbMovies, });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/id:", async (res, req) => {
  const count = await Movie.count({});
  //console.log(count);
});
module.exports = router;
