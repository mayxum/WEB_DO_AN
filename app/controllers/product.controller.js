exports.createProduct = async (req, res, next) => {
  res.json({ message: "Create Product successfully" });
};

exports.deleteProduct = async (req, res, next) => {
  res.json({ message: "Delete Product successfully" });
};

exports.updateProduct = async (req, res, next) => {
  res.json({ message: "Update Product successfully" });
};

exports.findProductbyId = async (req, res, next) => {
  res.json({ message: "Find product by ID successfully" });
};

exports.findProductbyType = async (req, res, next) => {
  res.json({ message: "Find product by type successfully" });
};

exports.findProductByName = async (req, res, next) => {
  res.json({ message: "Find product by Name successfully" });
};
