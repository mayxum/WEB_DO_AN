const router = require("express").Router();
const controller = require("../controllers/bill.controller");

router.route("/")
    .post(controller.createBill);

router.route("/:id")
    .get(controller.findBillbyId)
    .put(controller.updateBill)
    .delete(controller.cancelBill)
    
module.exports = router;