exports.createAccount = async (req, res, next) => {
  res.json({ message: "Create account successfully" });
};

exports.deleteAccount = async (req, res, next) => {
  res.json({ message: "Delete Account successfully" });
};

exports.updateAccount = async (req, res, next) => {
  res.json({ message: "Update Account successfully" });
};

exports.findAccountbyId = async (req, res, next) => { 
    res.json({message: "Find Account by ID successfully"});
}


