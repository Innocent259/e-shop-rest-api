const express = require("express");
const Product = require('../models/product');

const router = express.Router();

router.get("/", async (req, res) => {
  const productsList = await Product.find();
  res.send(productsList);
});

router.post("/", (req, res) => {
  const product = new Product({
    name: req.body.name,
    image: req.body.image,
    counterInStock: req.body.counterInStock,
  });
  product
    .save()
    .then((createdProduct) => {
      res.status(201).json(createdProduct);
    })
    .catch((err) => {
      res.status(501).json({
        err: err,
        success: false,
      });
    });
});

module.exports = router;