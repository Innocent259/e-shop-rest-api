const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Product = require('./models/product');
const productsRouter = require('./routers/product');

//Middlewares
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use('/products', productsRouter);

require("dotenv").config();
const api = process.env.URL_VARIABLE;

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Database is ready");
  })
  .catch((err) => console.log(err));
app.listen(3001, () => {
  console.log("the server is running");
});
