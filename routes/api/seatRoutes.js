const router = require("express").Router();

const Seat = require('../../models/Seats')

console.log('in seat routes file')
router.post('/', (req, res) => {
  Seat.create({
    seat_row: req.body.seat_row,
  
  })
    .then((newSeat) => {
      res.json(newSeat);
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

router.delete('/:id', async (req, res) => {
  try {
    const CustomerData = await Customer.destroy({
      where: {
        id: req.params.id,
        id: req.session.id,
      },
    });

    if (!CustomerData) {
      res.status(404).json({ message: 'No customer found with this id!' });
      return;
    }

    res.status(200).json(CustomerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
