exports.createProduct = async (req, res, next) => {
  res.send({ message: "Create Product successfully" });
};

exports.deleteProduct = async (req, res, next) => {
  res.send({ message: "Delete Product successfully" });
};

exports.updateProduct = async (req, res, next) => {
  res.send({ message: "Update Product successfully" });
};

exports.findProductID = async (req, res, next) => {
  res.send({ message: "Find product by ID successfully" });
};

exports.findProductType = async (req, res, next) => {
  res.send({ message: "Find product by type successfully" });
};
