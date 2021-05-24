const router = require("express").Router();
//const Customer = require("../../models/Customer");
// Import the model
const Movie = require('../../models/Movies')

console.log('in movie routes file')
router.post('/', (req, res) => {
  Movies.create({
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

// router.post('/', async (req, res) => {
//   try {
//     const newCustomer = await Customer.create({
//       ...req.body,
//       customer_id: req.session.customer_id,
//     });

//     res.status(200).json(newCustomer);
//   } catch (err) {
//     res.status(400).json(err);
//   }
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
