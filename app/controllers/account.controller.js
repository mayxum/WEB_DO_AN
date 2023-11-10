const MongoService = require('../services/mongo.service')
const ErrorAPI  = require('../ErrorAPI');
const { json } = require('express');

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
  try {
    const Service = new MongoService()
    const account = Service.account
    const result  = await account.findOne({"_id" : req.params.id*1})
    if(!result)
      return res.json({message : `Người Dùng có ID : ${req.params.id} Không Tồn Tại`})
    return res.json(result) 
  } catch (error) {
    return next(new ErrorAPI(500 , "Get Error When Find By ID"))
  }
}


