exports.createAccount = async (req, res, next) => {
  res.send({ message: "Create account successfully" });
};

exports.deleteAccount = async (req, res, next) => {
  res.send({ message: "Delete Account successfully" });
};

exports.updateAccount = async (req, res, next) => {
  res.send({ message: "Update Account successfully" });
};

exports.findAccountID = async (req, res, next) => { 
    res.send({message: "Find Account by ID successfully"});
}


