module.exports = {
  app: {
    PORT: 3000,
  },
  db: {
    url: "mongodb://127.0.0.1:27017",
    dbName: "QuanLyBanHang",
    collection: {
      role: "Role",
      account: "Account",
      sanpham: "ProductInfo",
      type: "ProductType",
      hoadon: "Bill",
      chitiet: "BillDetail",
      giohang: "Cart",
      truyvan: "BangTruyVan",
    },
  },
};
