const router = require("express").Router();

//const Customer = require("../../models/Customer");
// Import the model
const { Customer, Movie } = require("../../../models");


router.get("/login", async (req, res) => {
  res.render("login");
});
router.get("/confirmation", async (req, res) => {
  try {
       const movieData = await Movie.findAll({});
    //console.log(movieData);

    const dbMovies = movieData.map((movie) => movie.get({ plain: true }));
    console.log(dbMovies);
    const jaws = dbMovies[3];
    const notebook = dbMovies[2];
    const woz = dbMovies[0];

    console.log(jaws);
    res.render("confirmation", { jaws });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  res.render("signup");
  console.log("in cust routes file");
  router.post("/", async (req, res) => {
    try {
      const dbCustomerData = Customer.create({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      });

      // Save session with logged in variable
      req.session.save(() => {
        req.session.loggedIn = true;
        res.status(200).json(dbCustomerData);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
});

router.get("/seatReservation", async (req, res) => {
  res.render("seatReservation");
});


//Create
router.post("/", async (req, res) => {
  console.log("_________________________________");
  try {
    const dbCustomerData = Customer.create({
      first_name: req.body.firstName,
      last_name: req.body.lastName,

      email: req.body.email,
      password: req.body.password,
    });
    //console.log(dbCustomerData);
    // Save session with logged in variable
    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(dbCustomerData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// Customer Login
router.post("/login", async (req, res) => {
  try {
    const dbCustomerData = await Customer.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbCustomerData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    // const validPassword = await Customer.checkPassword(req.body.password);

    // if (!validPassword) {
    //   res
    //     .status(400)
    //     .json({ message: "Incorrect email or password. Please try again!" });
    //   return;
    // }

    // Once the user successfully logs in, set up the sessions variable 'loggedIn'
    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200);
      res.render("homepage", {}); // include variables, do res.send from line 70
    });
    // { user: dbCustomerData, message: "You are now logged in!" }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// Read
router.get("/homepage", async (req, res) => {
  try {
    const movieData = await Movie.findAll({});
    console.log(movieData);
    const dbMovies = movieData.map((movie) => movie.get({ plain: true }));
    console.log(dbMovies);
    res.render("homepage", { dbMovies });
  } catch (err) {
    console.log(
      err + "_____________________________________________________________"
    );
    res.status(500).json(err);
  }
});

module.exports = router;
// Logout
router.post("/logout", (req, res) => {
  // When the user logs out, destroy the session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
