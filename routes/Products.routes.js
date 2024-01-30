const express = require("express");
const router = express.Router();

const ProductsController = require("../controllers/Products.controller");

const allowTo = require("../middelwares/allowTo");
const verifyToken = require("../middelwares/verifyToken");

const validationSchema = require("../middelwares/validationSchema");

router
  .route("/")
  .get(verifyToken, ProductsController.getAllProducts)
  .post(
    verifyToken,
    validationSchema.productValidationSchema(),
    ProductsController.AddProducts
  );

router
  .route("/:productId")
  .get(verifyToken, ProductsController.getProduct)
  .patch(verifyToken, ProductsController.updateProduct)
  .delete(verifyToken, ProductsController.removeProduct);
module.exports = router;
