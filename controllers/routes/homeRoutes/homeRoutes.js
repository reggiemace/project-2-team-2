const router = require("express").Router();
const { Movie, Customer } = require("../../../models");

// router.get("/", async (req, res) => {
//     try {
//       const movieData = await Movie.findAll({});
//       console.log(movieData);
//       const dbMovies = movieData.map((movie) => movie.get({ plain: true }));
//       console.log(dbMovies);
//       res.render("homepage", { dbMovies, });
//     } catch (err) {
//       console.log(err + "_____________________________________________________________");
//       res.status(500).json(err);
//     }
//   });

module.exports = router;
