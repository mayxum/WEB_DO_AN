const MongoService = require("../services/mongo.service");
const ErrorAPI = require("../ErrorAPI");

exports.createBill = async (req, res, next) => {
  try {
    const Service = new MongoService();
    const hoadon = Service.hoadon;
    const chitiet = Service.chitiet;
    const truyvan = Service.truyvan;
    const detail = req.body.detail || { prdID: [], quantity: [] };
    const index = await truyvan.findOneAndUpdate(
      {},
      { $inc: { hoadon: 1, chitiet: 1 } }
    );
    const result = await hoadon.insertOne({
      _id: index.hoadon,
      ...req.body.info,
    });
    await chitiet.insertOne({
      _id: index.chitiet,
      billNumber: index.hoadon,
      ...detail,
    });
    if (result.acknowledged)
      return res.json({ message: "Create order successfully" });
    return res.json({ message: "Failed to create order" });
  } catch (error) {
    return next(new ErrorAPI(500, "Error when creating order"));
  }
};

exports.updateBill = async (req, res, next) => {
  try {
    const Service = new MongoService();
    const hoadon = Service.hoadon;
    const result = await hoadon.findOneAndUpdate(
      { _id: req.params.id * 1 },
      { $set: req.body }
    );
    if (result) return res.json({ message: "Update order successfully" });
    return res.json({ message: "Failed to update order" });
  } catch (error) {
    return next(new ErrorAPI(500, "Error when updating order"));
  }
};

exports.cancelBill = async (req, res, next) => {
  try {
    const Service = new MongoService();
    const hoadon = Service.hoadon;
    const result = await hoadon.findOneAndUpdate(
      { _id: req.params.id * 1 },
      { $set: { status: 0 } }
    );
    if (result) return res.json({ message: "Cancel order successfully" });
    return res.json({ message: "Failed to cancel order" });
  } catch (error) {
    return next(new ErrorAPI(500, "Error when cancenlling order"));
  }
};

exports.findBillbyId = async (req, res, next) => {
  try {
    const Service = new MongoService();
    const hoadon = Service.hoadon;
    const chitiet = Service.chitiet;
    const result = await hoadon.findOne({ _id: req.params.id * 1 });
    const detail = await chitiet.findOne({ billNumber: req.params.id * 1 });
    if (!result)
      return res.json({
        message: `Order with ID : ${req.params.id} does not exist`,
      });
    return res.json({ ...result, detail: detail });
  } catch (error) {
    return next(new ErrorAPI(500, "Error find order ID"));
  }
};

exports.nextStatus = async (req, res, next) => {
  try {
    const status = [
      "Order cancelled",
      "Order received",
      "Order confirmed",
      "Delivering",
      "Order paid",
    ];
    const Service = new MongoService();
    const hoadon = Service.hoadon;
    const result = await hoadon.findOneAndUpdate(
      { _id: req.params.id * 1 },
      { $inc: { status: 1 } }
    );
    if (result.status >= 4) return res.json({ message: "Order has been paid" });
    if (result)
      return res.json({
        message: `Update order status t0 ${
          status[result.status + 1]
        } successfully`,
      });
    return res.json({ message: "Cannot find order" });
  } catch (error) {
    return next(new ErrorAPI(500, "Error when updating order"));
  }
};

exports.getBillByUID = async (req, res, next) => {
  try {
    const Service = new MongoService();
    const hoadon = Service.hoadon;
    const result = await hoadon
      .find({ UID: req.params.uid * 1 })
      .sort({ _id: -1 })
      .toArray();
    return res.json(result);
  } catch (error) {
    return next(new ErrorAPI(500, "Error getting order by user ID"));
  }
};
exports.getAvailableBillByUID = async (req, res, next) => {
  try {
    const Service = new MongoService();
    const hoadon = Service.hoadon;
    const result = await hoadon
      .find({
        $and: [
          { status: { $ne: 0 } },
          { status: { $ne: 5 } },
          { UID: req.params.uid * 1 },
        ],
      })
      .sort({ _id: -1 })
      .toArray();
    return res.json(result);
  } catch (error) {
    return next(new ErrorAPI(500, "Error getting available bill by user ID"));
  }
};

exports.getBillBySID = async (req, res, next) => {
  try {
    const Service = new MongoService();
    const hoadon = Service.hoadon;
    const result = await hoadon.find({ SID: req.params.sid * 1 }).toArray();
    return res.json(result);
  } catch (error) {
    return next(new ErrorAPI(500, "Error getting order by SID"));
  }
};

exports.getAllBillBySID = async (req, res, next) => {
  try {
    const Service = new MongoService();
    const hoadon = Service.hoadon;
    const result = await hoadon
      .find({ SID: req.params.sid * 1 })
      .sort({ _id: -1 })
      .toArray();
    return res.json(result);
  } catch (error) {
    return next(new ErrorAPI(500, "Error getting all bill by SID"));
  }
};

exports.getNewBill = async (req, res, next) => {
  try {
    const Service = new MongoService();
    const hoadon = Service.hoadon;
    const result = await hoadon.find({ status: 1 }).toArray();
    return res.json(result);
  } catch (error) {
    return next(new ErrorAPI(500, "Error getting new order"));
  }
};

exports.validBill = async (req, res, next) => {
  try {
    const service = new MongoService();
    const hoadon = service.hoadon;
    const result = await hoadon.findOneAndUpdate(
      { _id: req.params.id * 1 },
      { $set: { status: 2, SID: req.body.SID } }
    );

    res.json(result);
  } catch (error) {
    return next(new ErrorAPI(500, "Error getting valid order"));
  }
};

exports.doneBill = async (req, res, next) => {
  try {
    const service = new MongoService();
    const hoadon = service.hoadon;
    const result = await hoadon.findOneAndUpdate(
      { _id: req.params.id * 1 },
      { $set: { status: 4, deliveryDate: req.body.deliveryDate } }
    );

    res.json(result);
  } catch (error) {
    return next(new ErrorAPI(500, "Error getting bill done"));
  }
};
