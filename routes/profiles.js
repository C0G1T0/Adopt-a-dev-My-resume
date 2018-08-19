const express = require("express");
const router = express.Router();

// Route  GET /
// Desc   Test profiles route
router.get("/", (req, res) => res.json({ msg: "profiles works" }));

module.exports = router;
