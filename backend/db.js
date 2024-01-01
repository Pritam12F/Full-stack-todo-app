const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv:/<username>:<password>@cluster0.w5m2bxm.mongodb.net/"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todos = mongoose.model("todos", todoSchema);

module.exports = {
  todos,
};
