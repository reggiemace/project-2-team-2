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

router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPK(req.params.id);
    if (!userData) {
      res.status(404).json({ message: "No user with that id!" });
      return;
    }
    res.status(200).json.apply(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.post("./seed", (req, res) => {
//   Customer.beforeBulkCreate([
//     {
//       first_name: "Aiden",
//       last_name: "Radinksky",
//       email: "asradinsky@gmail.com",
//       password: "pass123",
//     },
//     {
//       first_name: "Iris",
//       last_name: "Valle",
//       email: "iris.valle.design@gmail.com",
//       password: "pass1234",
//     },
//     {
//       first_name: "Joey",
//       last_name: "Kouneski",
//       email: "joeykouneski@gmail.com",
//       password: "pass12345",
//     },
//     {
//       first_name: "Reggie",
//       last_name: "Mace",
//       email: "reginaldmace36@gmail.com",
//       password: "pass123456",
//     },
//   ])
//     .then(() => {
//       res.send("Database seeded!");
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// router.delete('/:id', async (req, res) => {
//   try {
//     const CustomerData = await Customer.destroy({
//       where: {
//         id: req.params.id,
//         customer_id: req.session.customer_id,
//       },
//     });

//     if (!CustomerData) {
//       res.status(404).json({ message: 'No customer found with this id!' });
//       return;
//     }

//     res.status(200).json(CustomerData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
