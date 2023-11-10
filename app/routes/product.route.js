const router = require("express").Router();
const controller = require("../controllers/product.controller");

router.route("/")
  .post(controller.createProduct);

router
  .route("/:id")
  .delete(controller.deleteProduct)
  .put(controller.updateProduct)
  .get(controller.findProductbyId);

module.exports = router;
