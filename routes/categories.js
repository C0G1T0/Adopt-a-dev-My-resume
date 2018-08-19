const express = require("express");
const router = express.Router();

// Load Category Model
const Category = require("../models/Category");

// Route  GET /
// Desc   Get all categories
router.get("/", (req, res) => {
  Category.find()
    .then(categories => res.json(categories))
    .catch(err => console.log(err));
});

// Route  POST /
// Desc   Add category route
router.post("/", (req, res) => {
  Category.findOne({ name: req.body.name }).then(category => {
    if (category) {
      return res.status(400).json({ category: "Category already exists" });
    } else {
      const newCategory = new Category({
        name: req.body.name
      });
      newCategory
        .save()
        .then(category => res.json(category))
        .catch(err => console.log(err));
    }
  });
});

module.exports = router;
