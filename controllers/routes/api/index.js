const router = require("express").Router();
const customerRoutes = require("./customerRoutes");
//const movieRoutes = require("./movieRoutes");
//const seatRoutes = require("./seatRoutes");

router.use("/customer", customerRoutes);
//router.use("/movie", movieRoutes);
//router.use("/seat", seatRoutes);
module.exports = router;
