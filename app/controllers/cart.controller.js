const MongoService = require('../services/mongo.service')
const ErrorAPI  = require('../ErrorAPI');

exports.findByUID = async (req, res, next) => {
  try {
    const Service = new MongoService()
    const giohang = Service.giohang
    const result  = await giohang.findOne({"UID" : req.params.id*1})
    if(!result)
      return res.json({message : `Người Dùng có ID : ${req.params.id} Không Tồn Tại`})
    return res.json(result) 
  } catch (error) {
    return next(new ErrorAPI(500 , "Get Error When Find By ID"))
  }
};

exports.updateCart = async (req, res, next) => {
  try {
    const Service = new MongoService()
    const giohang = Service.giohang
    const result  = await giohang.findOneAndUpdate({"UID" : req.params.id*1} , {$set : req.body})
    if(result)
      return res.json({message : "Cập Nhật Giỏ Hàng Thành Công"})
    return res.json({message : "Không Tìm Thấy Người Dùng"})
  
  } catch (error) {
    return next(new ErrorAPI(500,"Error When Update Cart"))
  }
};
