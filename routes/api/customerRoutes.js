const router = require("express").Router();
//const Customer = require("../../models/Customer");
// Import the model
const Customer = require("../../models/Customer");


console.log("in cust routes file");
router.post("/", (req, res) => {
  console.log("creating customer");
  Customer.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
  })
    .then((newCustomer) => {
      res.json(newCustomer);
    })
    .catch((err) => {
      res.json(err);
    });
});
// Create one Customer
router.get("/", async (req, res) => {
  try {
    const userData = await Customer.findAll({});
    if (!userData) {
      res.status(404).json({ message: "No user with that id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// Get one Customer
router.get("/:id", async (req, res) => {
  try {
    const userData = await Customer.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: "No user with that id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// Delete one customer, will also delete movie
router.delete('/:id', async (req, res) => {
  try {
    const userData = await Customer.destroy({
      where: {
        id: req.params.id,
      }, 
    });
    if (!userData) {
      res.status(404).json({ message: "No user with that id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
