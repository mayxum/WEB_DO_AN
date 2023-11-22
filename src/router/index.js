import { createWebHistory, createRouter } from "vue-router";
import Homepage from "../views/Homepage.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Homepage,
  },
  {
    path: "/product",
    name: "Products",
    component: () => import("../views/Product.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/Signup.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/Notfound.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Users/Dashboard.vue"),
    props: true,
  },
  {
    path: "/dashboard/changepass",
    name: "ChangePass",
    component: () => import("../views/Users/ChangePass.vue"),
    props: true,
  },
  {
    path: "/addproduct",
    name: "Add Product",
    component: () => import("../views/AddProduct.vue"),
    props: true,
  },
  {
    path: "/addproduct/:id",
    name: "Edit Product",
    component: () => import("../views/UpdateProduct.vue"),
    props: true,
  },
  {
    path: "/myorder/:id",
    name: "My Order",
    component: () => import("../views/Order.vue"),
    props: true,
  },
  {
    path: "/myorder/:id/all",
    name: "All my order",
    component: () => import("../views/Order.All.vue"),
    props: true,
  },
  {
    path: "/orderdetail/:mahoadon",
    name: "Detail order",
    component: () => import("../views/OrderDetail.vue"),
    props: true,
  },
  {
    path: "/stafforder/:sid/all",
    name: "Staff Order",
    component: () => import("../views/StaffOrder.vue"),
    props: true,
  },
  {
    path: "/stafforder",
    name: "Await Order",
    component: () => import("../views/AwaitOrder.vue"),
    props: true,
  },
  {
    path: "/stafforder/:sid",
    name: "Process Order",
    component: () => import("../views/ProcessOrder.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
