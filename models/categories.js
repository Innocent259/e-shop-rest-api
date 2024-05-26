const mongoose = require("mongoose");

const categoriesSchema = mongoose.Schema({
  name: String,
  image: String,
  counterInStock: {
    type: Number,
    required: true,
  },
});
