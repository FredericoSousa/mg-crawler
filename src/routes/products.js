const router = require("express").Router();
const { validate } = require("../middlewares");
const { productInputValidator } = require("../validators");
const {
  ProductsController: { getProducts }
} = require("../controllers");

router.post("", validate(productInputValidator), getProducts);

module.exports = app => app.use("/products", router);
