<template>
  <div class="small-container cart-page">
    <div class="card-body" v-if="quantity.length != 0">
      <table class="table">
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        <tr class="align-middle" v-for="(i, index) in cart.prdId" :key="i._id">
          <td>
            <div class="cart-info">
              <img class="image" :src="i.PrdImage" alt="" />
              <div>
                <p>{{ i.productName }}</p>
                <small>{{
                  i.price.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })
                }}</small>
                <br />
                <a href="" class="delete-btn" @click="deleteItem(index)"
                  >Delete</a
                >
              </div>
            </div>
          </td>
          <td>
            <input
              type="number"
              name=""
              id=""
              v-model="quantity[index]"
              min="0"
              @change="updateItem(index)"
              max="1000"
            />
          </td>
          <td>
            {{
              (i.price * quantity[index]).toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })
            }}
          </td>
        </tr>
      </table>

      <div class="total-price">
        <table>
          <tr>
            <td>Total:</td>
            <td>
              {{
                SumMoney.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })
              }}
            </td>
          </tr>
        </table>
      </div>

      <div class="mb-3 confirm-cart">
        <button class="btn btn-outline-success" @click="createBill">
          Confirm order
        </button>
      </div>
    </div>

    <div class="card-body" v-else>
      <h3 class="no-product">You have not add any product into cart.</h3>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import AxiosAPI from "../services/api.service";
const router = useRouter();
if (localStorage.isLogin !== "user") {
  alert("Please sign in as customer");
  router.push("/login");
}
const cart = ref();
const quantity = ref([]);
const UID = JSON.parse(localStorage.info)._id;
async function GetCart() {
  cart.value = await AxiosAPI.getCart(UID);
  quantity.value = cart.value.quantity;
}
GetCart();
const SumMoney = computed(() => {
  return quantity.value.reduce((acc, value, index) => {
    return acc + value * cart.value.prdId[index].price;
  }, 0);
});
async function updateItem(index) {
  if (quantity.value[index] === 0) deleteItem(index);
  else await AxiosAPI.updateCart(UID, { quantity: quantity.value });
}

async function deleteItem(index) {
  const newprdId = cart.value.prdId.filter((val, ind) => ind != index);
  const newQuantity = quantity.value.filter((val, ind) => ind != index);
  await AxiosAPI.updateCart(UID, { prdId: newprdId, quantity: newQuantity });
  GetCart();
}
async function clearCart() {
  const newprdId = [];
  const newQuantity = [];
  await AxiosAPI.updateCart(UID, { prdId: newprdId, quantity: newQuantity });
  GetCart();
}
function getNow() {
  const now = new Date();
  const date = now.getDate();
  const mounth = now.getMonth() + 1;
  const year = now.getFullYear();
  return `${year}-${mounth}-${date}`;
}
const now = getNow();
const newBill = ref();
async function createBill() {
  newBill.value = {
    info: {
      UID: UID,
      SID: -1,
      status: 1,
      createDate: now,
      deliveryDate: -1,
      value: SumMoney,
    },
    detail: {
      prdId: cart.value.prdId,
      quantity: quantity.value,
    },
  };
  await AxiosAPI.createBill(newBill.value.info, newBill.value.detail);
  await clearCart();
  alert("Create order successfully");
  router.push(`/myorder/${UID}`);
}
</script>

<style>
td img {
  width: 80px;
  height: 80px;
  margin-right: 10px;
}
.item {
  color: rgb(181, 39, 39);
}
.cart-info {
  display: flex;
  flex-wrap: wrap;
}
.cart-page {
  margin: 60px auto;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th {
  padding: 5px;
  color: #fff;
  background: #ff523b;
  font-weight: normal;
}
.total-price,
.confirm-cart {
  display: flex;
  justify-content: flex-end;
}
.confirm-cart {
  margin-top: 10px;
}
.total-price table {
  border-top: 3px solid #ff523b;
  width: 100%;
  max-width: 350px;
}
td {
  padding: 10px 5px;
}
td a {
  color: #ff523b;
  font-size: 12px;
}
td:last-child {
  text-align: right;
}
th:last-child {
  text-align: right;
}
.no-product {
  text-align: center;
}
</style>
