const express = require("express");
const router = express.Router();

// Load Category Model
const Skill = require("../models/Skill");

// Route  GET /
// Desc   Get all categories
router.get("/", (req, res) => {
  Skill.find()
    .then(skills => res.json(skills))
    .catch(err => console.log(err));
});

// Route  POST /
// Desc   Post new skill route
router.post("/", (req, res) => {
  Skill.findOne({ name: req.body.name }).then(skill => {
    if (skill) {
      return res.status(400).json({ skill: "Skill already exists" });
    } else {
      const newSkill = new Skill({
        category: req.body.IDcategory,
        name: req.body.name,
        img: req.body.img,
        description: req.body.description,
        disabled: false
      });
      newSkill
        .save()
        .then(skill => res.json(skill))
        .catch(err => console.log(err));
    }
  });
});
router.put("/:id", (req, res) => {
  Skill.findByIdAndUpdate(req.params.id, { disabled: true }, { new: true })
    .then(skill => res.json(skill))
    .catch(err => console.log(err));
});

module.exports = router;
