var mongoose = require("mongoose");

//SCHEMA SETUP
var projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task" //Data from User model schema
    }
  ],
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User" //Data from User model schema
    },
    name: String,
    profileImg: String
  },
  date: {
    type: Date,
    default: Date.now,
    format: "%Y-%m-%d%"
  }
});

module.exports = mongoose.model("Project", projectSchema); // Needed evertime we require mongoose
