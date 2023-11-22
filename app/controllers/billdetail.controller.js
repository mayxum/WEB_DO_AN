const MongoService = require("../services/mongo.service");
const ErrorAPI = require("../ErrorAPI");

exports.updateDetailBill = async (req, res, next) => {
  try {
    const Service = new MongoService();
    const chitiet = Service.chitiet;
    const result = await chitiet.findOneAndUpdate(
      { billNumber: req.params.id * 1 },
      { $set: req.body }
    );
    if (result) return res.json({ message: "Create bill detail successfully" });
    return res.json({ message: "Cannot find bill detail" });
  } catch (error) {
    return next(new ErrorAPI(500, "Error when updating bill detail"));
  }
};
