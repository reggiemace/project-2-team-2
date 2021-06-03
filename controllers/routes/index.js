const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./homeRoutes");

router.use("/api", apiRoutes);
//router.use("homeRoutes", htmlRoutes);

module.exports = router;
