const MongoService = require('../services/mongo.service')
const ErrorAPI  = require('../ErrorAPI');

exports.createAccount = async (req, res, next) => {
  try {
    const Service = new MongoService()
    const account = Service.account
    const truyvan = Service.truyvan
    const index   = await truyvan.findOneAndUpdate({} , {$inc : {account : 1}})
    console.log(index.account)
    const result  = await account.insertOne({"_id" : index.account , ...req.body})
    if(result.acknowledged)
      return res.json({message : "Tạo Tài Khoản Thành Công"})
    
    return res.json({message : "Tạo Tài Khoản Thất Bại"})
  
  } catch (error) {
    return next(new ErrorAPI(500,"Error When Create Account"))
  }
};

exports.deleteAccount = async (req, res, next) => {
  try {
    const Service = new MongoService()
    const account = Service.account
    const result  = await account.deleteOne({_id : req.params.id*1})
    if(result.deletedCount === 0)
      return res.json({message : "Không Tồn Tại Người Dùng "})
    
    return res.json({message : "Xoá Người Dùng Thành Công"})
  } catch (error) {
    return next(new ErrorAPI(500,"Error When Delete Account"))
  }
};

exports.updateAccount = async (req, res, next) => {
  try {
    const Service = new MongoService()
    const account = Service.account
    const result  = await account.findOneAndUpdate({"_id" : req.params.id*1} , {$set : req.body})
    if(result)
      return res.json({message : "Cập Nhật Tài Khoản Thành Công"})
    return res.json({message : "Không Tìm Thấy Người Dùng"})
  
  } catch (error) {
    return next(new ErrorAPI(500,"Error When Update Account"))
  }
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


