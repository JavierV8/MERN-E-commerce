const express = require("express");
const cors = require("cors");
const products = require("../routes/products");
const auth = require("../routes/auth");
const orders = require("../routes/orders");
const user = require("../routes/user");

module.exports = function (app) {
  app.use(cors());
  app.use(express.json());
  app.use("/api/products", products);
  app.use('/api/auth', auth);
  app.use('/api/orders', orders);
  app.use('/api/user', user);
};
