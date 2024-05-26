const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  name: String,
  productId: Number,
});

const Order = mongoose.model("order", orderSchema);
