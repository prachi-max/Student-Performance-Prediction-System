const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true   
  },
  phone: String,
  password: String,
  currentStreak: {
  type: Number,
  default: 0
},

lastActiveDate: {
  type: Date,
  default: Date.now
},
});

module.exports = mongoose.model("User", userSchema);