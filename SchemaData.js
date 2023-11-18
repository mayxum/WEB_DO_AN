const role = 
{
    "_id"           : "int",
    "roleName"      : "string" 
}

const account = 
{
    "_id"       : "int",
    "username"  : "string",
    "password"  : "string",
    "name"      : "string",
    "address"   : "string",
    "email"     : "string",
    "phone"     : "string",  
    "role"      : "int"
}

const sanpham = 
{
    "_id"           : "int" ,
    "type"          : "string" ,
    "productName"   : "string",
    "description"   : "string",
    "price"         : "int",
    "quantity"      : "int",
    "PrdImage"      : "image"
}

const hoadon = 
{
    "_id"        : "int",
    "createDate"        : "date",
    "deliveryDate"      : "date",
    "status"            : "int",
    "UID"               : "int",
    "SID"               : "int"
}

const chitiet = 
{
    "_id"           : "int",
    "billNumber"    : "int",
    "prdId"         : ["SP1" , "Sp2"],
    "quantity"      : [  1   ,   3  ],
}

const giohang = 
{
    "_id"       : "int" ,
    "UID"       : "int" ,
    "prdId"     :["SP1" , "Sp2" ] ,
    "quantity"  :[  1   ,   3   ] ,
}

const roleInput = 
[
    {
        "_id": 1,
        "roleName": "Khach Hang"
    },
    {
        "_id": 2,
        "roleName": "Nhan Vien"
    },
    {
        "_id": 3,
        "roleName": "Admin"
    }
]
const accountInput = 
[
    {
        "_id": 1,
        "username": "admin",
        "password": "123",
        "name": "Người Quản Lý",
        "address": "Hé lô",
        "email": "admin@gmail.com",
        "phone": "1000",  
        "role": 3
    },
    {
        "_id": 2,
        "username": "staff",
        "password": "123",
        "name": "Nhân Viên",
        "address": "Hé lô",
        "email": "staff@gmail.com",
        "phone": "1000",  
        "role": 2
    },
    {
        "_id": 3,
        "username": "user",
        "password": "123",
        "name": "Khách Hàng",
        "address": "Hé lô",
        "email": "cus@gmail.com",
        "phone": "1000",  
        "role": 1
    },
    {
        "_id": 4,
        "username": "lsatan",
        "password": "123",
        "name": "Lê Sỹ Anh Tấn",
        "address": "Hé lô",
        "email": "user@gmail.com",
        "phone": "1000",  
        "role": 1
    },
    {
        "_id": 5,
        "username": "lpthinh",
        "password": "123",
        "name": "Lê Phu THinh",
        "address": "Hé lô",
        "email": "user@gmail.com",
        "phone": "1000",  
        "role": 1
    },
    {
        "_id": 6,
        "username": "php",
        "password": "123",
        "name": "Phạm Hoàng Phong",
        "address": "Hé lô",
        "email": "user@gmail.com",
        "phone": "1000",  
        "role": 1
    },
    {
        "_id": 7,
        "username": "staff2",
        "password": "123",
        "name": "Nhân Viên 2",
        "address": "Hé lô",
        "email": "user@gmail.com",
        "phone": "1000",  
        "role": 2
    }
]
const sanphamInput = 
[
    {
        "_id"           : 1 ,
        "productName"   : "Giầy Vàng",
        "type"          : 1 ,   
        "description"   : "Đôi Giầy Màu Sang Trọng",
        "price"         : 12000000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/shoes1.png"
    },
    {
        "_id"           : 2 ,
        "productName"   : "Giầy Đen",
        "type"          : 1 ,   
        "description"   : "Đôi Giầy Màu Sang Trọng",
        "price"         : 950000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/shoes2.png"
    },
    {
        "_id"           : 3 ,
        "productName"   : "Giầy Xanh",
        "type"          : 1 ,   
        "description"   : "Đôi Giầy Màu Sang Trọng",
        "price"         : 120000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/shoes3.png"
    },
    {
        "_id"           : 4 ,
        "productName"   : "Giầy Xanh Trắng",
        "type"          : 1 ,   
        "description"   : "Đôi Giầy Màu Sang Trọng",
        "price"         : 10000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/shoes4.png"
    },
    {
        "_id"           : 5 ,
        "productName"   : "Giầy Xám",
        "type"          : 1 ,   
        "description"   : "Đôi Giầy Màu Sang Trọng",
        "price"         : 215000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/shoes5.png"
    },
    {
        "_id"           : 6 ,
        "productName"   : "Giầy Cam",
        "type"          : 1 ,   
        "description"   : "Đôi Giầy Màu Sang Trọng",
        "price"         : 1250000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/shoes6.png"
    },
    {
        "_id"           : 7 ,
        "productName"   : "Giầy Đỏ",
        "type"          : 1 ,   
        "description"   : "Đôi Giầy Màu Sang Trọng",
        "price"         : 625000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/shoes7.png"
    },
    {
        "_id"           : 8 ,
        "productName"   : "Giầy Đen Xanh",
        "type"          : 1 ,   
        "description"   : "Đôi Giầy Màu Sang Trọng",
        "price"         : 125000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/shoes8.png"
    },
    {
        "_id"           : 9 ,
        "productName"   : "Giầy Thể Thao",
        "type"          : 1 ,   
        "description"   : "Đôi Giầy Màu Sang Trọng",
        "price"         : 325000,
        "quantity"      : 500 ,
        "PrdImage"      : "image/shoes.png"
    },
]
const TypeProductInput = 
[
    {
        "_id" : 1 ,
        "Name" : "Giầy" 
    },
    {
        "_id" : 2 ,
        "Name" : "Trái Cây" 
    },
    {
        "_id" : 3 ,
        "Name" : "Something" 
    }
]
const hoadonInput = 
[
    {
        "_id"               : 1 ,
        "createDate"        : "2020-10-10",
        "deliveryDate"      : "2023-15-11",
        "status"            : 1,
        "UID"               : 1,
        "SID"               : 2
    }
]
//  Các Trạng Thái Ứng với Các Số 
//  Đã Huỷ          -> 0
//  Đã Đặt Hàng     -> 1
//  Đã Xác Nhận     -> 2
//  Đang Giao Hàng  -> 3
//  Đã Thanh Toán   -> 4
const chitietInput = 
[
    {
        "_id"           : 1,
        "billNumber"    : 1,
        "prdId"         : [1 , 2 ],
        "quantity"      : [1 , 3 ],
    }
]
const giohangInput = 
[
    {
        "_id"       : 1 ,
        "UID"       : 3 ,
        "prdId"     :[1,1] ,
        "quantity"  :[1,3] ,
    }
]
//Next Number
const BangTruyVan = 
[
    {
        "_id"           : 0 ,
        "account"       : 8 ,
        "sanpham"       : 2 ,
        "hoadon"        : 1 ,
        "chitiet"       : 2 ,
        "giohang"       : 2 ,
    }
]

module.exports = {
    role    : roleInput ,
    account : accountInput ,
    sanpham : sanphamInput ,
    type    : TypeProductInput ,
    hoadon  : hoadonInput  ,
    chitiet : chitietInput ,
    giohang : giohangInput ,
    truyvan : BangTruyVan  
}