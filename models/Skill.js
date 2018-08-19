const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const SkillSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: "category"
  },
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    required: true
  }
});

module.exports = Skill = mongoose.model("skill", SkillSchema);
