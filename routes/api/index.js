const router = require("express").Router();
const customerRoutes = require("./customerRoutes");
const movieRoutes = require("./movieRoutes");
const seatRoutes = require("./seatRoutes");

router.use("/customers", customerRoutes);
router.use("/movies", movieRoutes);
router.use("/seats", seatRoutes);
module.exports = router;
