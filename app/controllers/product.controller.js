const MongoService = require("../services/mongo.service");
const ErrorAPI = require("../ErrorAPI");

exports.createProduct = async (req, res, next) => {
  try {
    const Service = new MongoService();
    const sanpham = Service.sanpham;
    const truyvan = Service.truyvan;
    const index = await truyvan.findOneAndUpdate({}, { $inc: { sanpham: 1 } });
    const result = await sanpham.insertOne({ _id: index.sanpham, ...req.body });
    if (result.acknowledged)
      return res.json({ message: "Add product successfully" });
    return res.json({ message: "Failed to add product" });
  } catch (error) {
    return next(new ErrorAPI(500, "Error when adding product"));
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const Service = new MongoService();
    const sanpham = Service.sanpham;
    const result = await sanpham.deleteOne({ _id: req.params.id * 1 });
    if (result.deletedCount === 0)
      return res.json({ message: "Prodct does not exist" });

    return res.json({ message: "Delete product successfully" });
  } catch (error) {
    return next(new ErrorAPI(500, "Error when deleting product"));
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const Service = new MongoService();
    const sanpham = Service.sanpham;
    const result = await sanpham.findOneAndUpdate(
      { _id: req.params.id * 1 },
      { $set: req.body }
    );
    if (result) return res.json({ message: "Update product successfully" });
    return res.json({ message: "Cannot find product" });
  } catch (error) {
    return next(new ErrorAPI(500, "Error when updating product"));
  }
};

exports.findProductbyId = async (req, res, next) => {
  try {
    const Service = new MongoService();
    const sanpham = Service.sanpham;
    const result = await sanpham.findOne({ _id: req.params.id * 1 });
    if (!result)
      return res.json({
        message: `Product with ID: ${req.params.id} does not exist`,
      });
    return res.json(result);
  } catch (error) {
    return next(new ErrorAPI(500, "Error finding product ID"));
  }
};

exports.findProductbyType = async (req, res, next) => {
  try {
    const Service = new MongoService();
    const sanpham = Service.sanpham;
    const result = await sanpham.find({ type: req.params.type * 1 }).toArray();
    if (result.length === 0)
      return res.json({
        message: `No product with type ${req.params.type}`,
      });
    res.json(result);
  } catch (error) {
    console.log(error);
    return next(new ErrorAPI(501, "Error finding product type"));
  }
};

exports.findProductByName = async (req, res, next) => {
  try {
    const Service = new MongoService();
    const sanpham = Service.sanpham;
    var result;
    if (req.body.type)
      result = await sanpham
        .find({
          productName: {
            $regex: new RegExp(req.body.productName),
            $options: "i",
          },
          type: req.body.type * 1,
        })
        .sort({ _id: -1 })
        .toArray();
    else
      result = await sanpham
        .find({
          productName: {
            $regex: new RegExp(req.body.productName),
            $options: "i",
          },
        })
        .sort({ _id: -1 })
        .toArray();
    res.json(result);
  } catch (error) {
    console.log(error);
    return next(new ErrorAPI(501, "Error finding product by product name"));
  }
};
exports.getAll = async (req, res, next) => {
  try {
    const Service = new MongoService();
    const sanpham = Service.sanpham;
    const result = await sanpham.find({}).sort({ _id: -1 }).toArray();
    res.json(result);
  } catch (error) {
    console.log(error);
    return next(new ErrorAPI(501, "Error when get all products"));
  }
};
