const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

//Middlewares
app.use(bodyParser.json());
app.use(morgan("tiny"));

//Models

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    counterInStock: Number
})
const Product = mongoose.model('Product', productSchema)

require("dotenv").config();
const api = process.env.URL_VARIABLE;

app.get(`/products`, (req, res) => {
//   const product = {
//     id: 1,
//     name: "papie hygienic",
//     image: "url",
//   };
//   res.send(product);
});

app.post("/products", (req, res) => {
  const product = new Product({
    name: req.body.name,
    image: req.body.image,
    counterInStock: req.body.counterInStock
  })
  product.save().then((createdProduct) => {
    res.status(201).json(createdProduct)
  }).catch((err) => {
    err: err,
    res.status(501).json(err);
  })
});

mongoose.connect(process.env.CONNECTION_STRING)
.then(() => {
    console.log('Database is ready')
})
.catch((err) => console.log(err))
app.listen(3001, () => {
  console.log("the server is running");
});
