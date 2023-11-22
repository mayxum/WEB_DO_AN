const MongoService = require("../services/mongo.service");
const ErrorAPI = require("../ErrorAPI");

exports.createAccount = async (req, res, next) => {
  try {
    const Service = new MongoService();
    const account = Service.account;
    const giohang = Service.giohang;
    const truyvan = Service.truyvan;
    const index = await truyvan.findOneAndUpdate(
      {},
      { $inc: { account: 1, giohang: 1 } }
    );
    const result = await account.insertOne({ _id: index.account, ...req.body });
    await giohang.insertOne({
      _id: index.giohang,
      UID: index.account,
      prdId: [],
      quantity: [],
    });
    if (result.acknowledged)
      return res.json({ message: "Create account successfully" });

    return res.json({ message: "Failed to create account" });
  } catch (error) {
    return next(new ErrorAPI(500, "Error when creating account"));
  }
};

exports.deleteAccount = async (req, res, next) => {
  try {
    const Service = new MongoService();
    const account = Service.account;
    const result = await account.deleteOne({ _id: req.params.id * 1 });
    if (result.deletedCount === 0)
      return res.json({ message: "Account does not exist" });

    return res.json({ message: "Delete account successfully" });
  } catch (error) {
    return next(new ErrorAPI(500, "Error when deleting account"));
  }
};

exports.updateAccount = async (req, res, next) => {
  try {
    const Service = new MongoService();
    const account = Service.account;
    const result = await account.findOneAndUpdate(
      { _id: req.params.id * 1 },
      { $set: req.body }
    );
    if (result) return res.json({ message: "Update account successfully" });
    return res.json({ message: "Cannot find account" });
  } catch (error) {
    return next(new ErrorAPI(500, "Error when updating account"));
  }
};

exports.findAccountbyId = async (req, res, next) => {
  try {
    const Service = new MongoService();
    const account = Service.account;
    const result = await account.findOne({ _id: req.params.id * 1 });
    if (!result)
      return res.json({
        message: `Account with ID: ${req.params.id} does not exist`,
      });
    return res.json(result);
  } catch (error) {
    return next(new ErrorAPI(500, "Error when finding account ID"));
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const Service = new MongoService();
    const account = Service.account;
    const username = req.body.username;
    const result = await account.findOne({ username: username });
    if (!result) return res.json({ isAvailable: false });
    else if (result.password !== req.body.password)
      return res.json({
        isAvailable: true,
        isTruePassword: false,
      });
    return res.json({
      isAvailable: true,
      isTruePassword: true,
      infomation: result,
    });
  } catch (error) {
    return next(new ErrorAPI("500", "Invalid username"));
  }
};
