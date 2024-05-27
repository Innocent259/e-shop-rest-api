const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  image: String,
  counterInStock: {
    type: Number,
    required: true,
  },
});
exports.User = mongoose.model("Product", userSchema);

