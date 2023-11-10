const router = require("express").Router();
const controller = require("../controllers/account.controller");

router.route("/")
    .post(controller.createAccount);

router.route("/:id")
  .delete(controller.deleteAccount)
  .put(controller.updateAccount)
  .get(controller.findAccountbyId);

module.exports = router;
