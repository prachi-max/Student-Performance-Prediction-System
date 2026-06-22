const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({

   userId: {
    type: String,
    required: true
  },
  
  subject: {
    type: String,
    required: true
  },

  title: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"]
  },

  deadline: {
    type: Date
  },

  status: {
    type: String,
    enum: ["Pending", "Completed"],
    default: "Pending"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Task", taskSchema);