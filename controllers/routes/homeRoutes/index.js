const router = require("express").Router();
// make get rout to render page
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

    const validPassword = await dbCustomerData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

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
router.get("/login", async (req, res) => {
  res.render("login");
});
router.get("/homepage", async (req, res) => {
  res.render("homepage");
});

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