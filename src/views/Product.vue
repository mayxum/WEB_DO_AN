<template>
  <div class="big">
    <div class="inputSearch text-center mt-3">
      <input
        type="text"
        class="text-center"
        style="border: 3px solid #ff523b"
        placeholder="Enter product name"
        @keyup.enter="getProductByName"
        v-model="input"
      />
      <i class="fas fa-search search-icon" @click="getProductByName"></i>
    </div>
    <div class="selectType mt-3">
      <select class="form-select" v-model="type" @change="getProductByName">
        <option :value="0">All</option>
        <option v-for="i in typeList" :key="i._id" :value="i._id">
          {{ i.Name }}
        </option>
      </select>
      <button
        v-if="isLogin == 'staff'"
        class="btn btn-primary align-middle add-product-select"
        @click="$router.push('/addproduct')"
      >
        Add product
      </button>
    </div>

    <div class="card-group" v-if="productList.length != 0">
      <div class="card" v-for="i in productList" :key="i._id">
        <div class="card-body text-center">
          <img :src="i.PrdImage" alt="PrdImage" />
        </div>
        <div class="products_text text-center">
          <h2>{{ i.productName }}</h2>
          <p>
            {{ i.description }}
          </p>
          <h3>
            {{
              i.price.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })
            }}
          </h3>
          <button
            class="btn add-card m-3"
            v-if="isLogin !== 'staff'"
            @click="addItem(i)"
          >
            Add to cart
          </button>
          <div v-else>
            <button
              class="btn m-3 btn-edit"
              @click="$router.push(`/addproduct/${i._id}`)"
            >
              Edit
            </button>
            <button class="btn m-3 btn-delete" @click="deleteProduct(i._id)">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <h2 class="text-center mt-5" v-else>
      There are no products
    </h2>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AxiosAPI from "../services/api.service";
import { useRouter } from "vue-router";

const productList = ref([]);
const typeList = ref([]);
const type = ref(0);
const input = ref("");
const router = useRouter();
var uid = localStorage.info ? JSON.parse(localStorage.info)._id : null;
const isLogin = localStorage.isLogin;
async function getProduct() {
  productList.value = await AxiosAPI.getAllProduct();
}
getProduct();

async function getProductByName() {
  const TYPE = type.value == 0 ? undefined : type.value;
  productList.value = await AxiosAPI.getProductByName(input.value, TYPE);
}

async function getType() {
  typeList.value = await AxiosAPI.getAllType();
}
getType();
async function addItem(product) {
  if (!uid) {
    alert("You must be logged in to add products");
    router.push("/login");
  } else {
    await AxiosAPI.addProductToCart(uid, product);
    alert(`Added ${product.productName} into cart`);
  }
}
async function deleteProduct(PID) {
  await AxiosAPI.deleteProduct(PID);
  alert("Delete product successfully");
  getProductByName();
}
</script>

<style scoped>
.card {
  box-shadow: 0 0 20px black;
  margin: 1.5vw;
  min-width: 22vw;
  max-width: 22vw;
}
.card-group {
  margin-left: 4vw;
  margin-bottom: 20px;
}
.card:first-child {
  margin-left: 0px;
}
.card:hover {
  transform: translateX(30);
}
.card img {
  width: 10vw;
  transition: 0.5s;
}
.card img:hover {
  transform: translateY(-5%);
}
.add-card {
  color: #ff523b;
}
.add-card:hover {
  background-color: #ff523b;
  color: white;
}
.inputSearch {
  margin-bottom: 20px;
}
.inputSearch input {
  width: 50vw;
  height: 30px;
}
.card p {
  height: 10vh;
}
.search-icon {
  width: 1vw;
  height: 0.1vh;
  margin-left: 5px;
  align-items: center;
  cursor: pointer;
}
.form-select {
  width: 15vw;
  margin-left: 81vw;
}
.add-product-select {
  width: 15vw;
  margin-left: 81vw;
  margin-top: 7px;
}
.btn-edit {
  color: blue;
}
.btn-edit:hover {
  background-color: blue;
  color: white;
}
.btn-delete {
  color: red;
}
.btn-delete:hover {
  background-color: red;
  color: white;
}
</style>
