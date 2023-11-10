const router = require("express").Router();
const controller = require("../controllers/bill.controller");

router.route("/")
    .post(controller.createBill);

router.route("/:id")
    .delete(controller.deleteBill)
    .put(controller.updateBill)
    .get(controller.findBillbyId);
module.exports = router;