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
    "_id"               : "int",
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
        "productName"   : "Puma Purple T-shirt",
        "type"          : 1 ,   
        "description"   : "Shirt",
        "price"         : 500000,
        "quantity"      : 500 ,
        "PrdImage"      : "images/product-4.png"
    },
    {
        "_id"           : 2 ,
        "productName"   : "Black Fossil Watch",
        "type"          : 2 ,   
        "description"   : "Shirt",
        "price"         : 1950000000,
        "quantity"      : 500 ,
        "PrdImage"      : "images/product-8.png"
    },
    {
        "_id"           : 3 ,
        "productName"   : "HRX Socks",
        "type"          : 4 ,   
        "description"   : "Socks",
        "price"         : 220000,
        "quantity"      : 500 ,
        "PrdImage"      : "images/product-7.png"
    },
    {
        "_id"           : 4 ,
        "productName"   : "Benetton Jogger",
        "type"          : 5 ,   
        "description"   : "Jogger",
        "price"         : 120000,
        "quantity"      : 500 ,
        "PrdImage"      : "images/product-3.png"
    },
    {
        "_id"           : 5 ,
        "productName"   : "Puma Crimson T-shirt",
        "type"          : 1 ,   
        "description"   : "Shirt",
        "price"         : 500000,
        "quantity"      : 500 ,
        "PrdImage"      : "images/product-1.png"
    },
    {
        "_id"           : 6 ,
        "productName"   : "HRX Black Sneaker",
        "type"          : 3 ,   
        "description"   : "Shoes",
        "price"         : 12500000,
        "quantity"      : 500 ,
        "PrdImage"      : "images/product-2.png"
    },
    {
        "_id"           : 7 ,
        "productName"   : "Nike Jogger",
        "type"          : 5 ,   
        "description"   : "Jogger",
        "price"         : 625000,
        "quantity"      : 500 ,
        "PrdImage"      : "images/product-12.png"
    },
    {
        "_id"           : 8 ,
        "productName"   : "Roadster Watch",
        "type"          : 2 ,   
        "description"   : "Watch",
        "price"         : 30000000,
        "quantity"      : 500 ,
        "PrdImage"      : "images/product-9.png"
    },
    {
        "_id"           : 9 ,
        "productName"   : "HRX White Sneaker",
        "type"          : 3 ,   
        "description"   : "Shoes",
        "price"         : 6350000,
        "quantity"      : 500 ,
        "PrdImage"      : "images/product-5.png"
    },
]
const TypeProductInput = 
[
    {
        "_id" : 1 ,
        "Name" : "T-Shirt" 
    },
    {
        "_id" : 2 ,
        "Name" : "Watch" 
    },
    {
        "_id" : 3 ,
        "Name" : "Shoes" 
    },
    {
        "_id" : 4 ,
        "Name" : "Socks" 
    },
    {
        "_id" : 5 ,
        "Name" : "Jogger" 
    },
    {
        "_id" : 6 ,
        "Name" : "Short" 
        },
    {
        "_id" : 7 ,
        "Name" : "Shirt" 
    },
]
const hoadonInput = 
[
   {
        "_id"               : 1 ,
        "createDate"        : "2023-10-10",
        "deliveryDate"      : -1,
        "status"            : 1,
        "UID"               : 3,
        "SID"               : -1 ,
        "value"             : 40000 ,
    },
    {
        "_id"               : 2 ,
        "createDate"        : "2023-11-21" ,
        "deliveryDate"      : -1,
        "status"            : 1,
        "UID"               : 3,
        "SID"               : -1 ,
        "value"             : 25725000 ,
    }
]

//  Huỷ          -> 0
//  Đặt Hàng     -> 1
//  Xác Nhận     -> 2
//  Giao Hàng    -> 3
//  Thanh Toán   -> 4
const chitietInput = 
[
    {
        "_id"           : 1,
        "billNumber"    : 1,
        "prdId": [
            {
                "_id"           : 7 ,
                "productName"   : "Nike Jogger",
                "type"          : 5 ,   
                "description"   : "Jogger",
                "price"         : 625000,
                "quantity"      : 500 ,
                "PrdImage"      : "images/product-12.png"
            },
        ],
        "quantity"      : [1],
    },
    {
        "_id" : 2 ,
        "billNumber": 2,
        "prId": [
            {
                "_id"           : 8 ,
                "productName"   : "Roadster Watch",
                "type"          : 2 ,   
                "description"   : "Watch",
                "price"         : 30000000,
                "quantity"      : 500 ,
                "PrdImage"      : "images/product-9.png"
            },
            {
                "_id"           : 9 ,
                "productName"   : "HRX White Sneaker",
                "type"          : 3 ,   
                "description"   : "Shoes",
                "price"         : 6350000,
                "quantity"      : 500 ,
                "PrdImage"      : "images/product-5.png"
            },
        ],
        "quantity" : [1, 3],
    }
]
const giohangInput = 
[
    {
        "_id"       : 1 ,
        "UID"       : 3 ,
        "prdId": [
            {
                "_id"           : 1 ,
                "productName"   : "Puma Purple T-shirt",
                "type"          : 1 ,   
                "description"   : "Shirt",
                "price"         : 500000,
                "quantity"      : 500 ,
                "PrdImage"      : "images/product-4.png"
            },
        ] ,
        "quantity"  :[1] ,
    },
    {
        "_id"       : 2 ,
        "UID"       : 4 ,
        "prdId"     : [] ,
        "quantity"  : [] ,   
    }
]
//Next Number
const BangTruyVan = 
[
    {
        "_id"           : 0 ,
        "account"       : 8 ,
        "sanpham"       : 10 ,
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