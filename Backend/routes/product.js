const express = require("express");
const router = express.Router();
const productController = require("../controller/product.js");


router.get("/:category", productController.getProducts)

  router.
  route("/:id")
  .get(productController.getProductById)
  .put(productController.updateProduct)
  .delete(productController.deleteProdyct)

  router.post("/new/product", productController.createProduct);


  module.exports = router;