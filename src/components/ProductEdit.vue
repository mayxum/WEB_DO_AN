<template>
  <div class="product-edit">
    <h3 class="text-center">
      <slot><strong></strong></slot>
    </h3>
    <div class="card-body text-center">
      <div class="m-2 g-3 justify-content-center mb-3 product-name-edit">
        <div class="text-start">
          <strong class="product-name">Product name</strong>
        </div>
        <div class="col-9">
          <input
            v-model="Product.productName"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="m-2 g-3 justify-content-center mb-3 product-type-edit">
        <div class="text-start">
          <strong>Product type</strong>
        </div>
        <div class="col-9">
          <select class="form-select" v-model="Product.type">
            <option :value="0">Choose product type</option>
            <option v-for="i in listType" :key="i._id" :value="i._id">
              {{ i.Name }}
            </option>
          </select>
        </div>
      </div>
      <div class="m-2 g-3 justify-content-center mb-3 product-type-edit">
        <div class="text-start">
          <strong>Price</strong>
        </div>
        <div class="col-9">
          <input v-model="Product.price" type="text" class="form-control" />
        </div>
      </div>
      <div class="m-2 g-3 justify-content-center mb-3 product-quantity-edit">
        <div class="text-start">
          <strong>Quantity</strong>
        </div>
        <div class="col-9">
          <input v-model="Product.quantity" type="text" class="form-control" />
        </div>
      </div>
      <div class="m-2 g-3 justify-content-center mb-3 product-img-edit">
        <div class="text-start">
          <strong>Image</strong>
        </div>
        <div class="col-9">
          <input v-model="Product.PrdImage" type="text" class="form-control" />
        </div>
      </div>
      <div class="m-2 g-3 justify-content-center mb-3 product-desc-edit">
        <div class="col-12">
          <div class="form-floating">
            <textarea
              v-model="Product.description"
              class="form-control"
              placeholder="Nhập Mô Tả"
              id="floatingTextarea2"
              style="width: 28vw; height: 15vh"
            ></textarea>
            <label for="floatingTextarea2">Description</label>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div class="d-grid gap-3 d-md-flex justify-content-md-center">
        <button
          class="btn btn-confirm"
          type="button"
          v-if="$props.id"
          @click="update"
        >
          Confirm
        </button>

        <button class="btn btn-create" type="button" @click="create" v-else>
          Add
        </button>

        <button
          class="btn btn-return"
          type="button"
          @click.prevent="$router.go(-1)"
        >
          Return
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import AxiosAPI from "../services/api.service";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps(["id"]);

const Product = ref({
  productName: undefined,
  type: 0,
  description: undefined,
  price: undefined,
  quantity: undefined,
  PrdImage: undefined,
});

async function getProduct(PID) {
  Product.value = await AxiosAPI.getProductByPID(PID);
}
if (props.id) getProduct(props.id);

const listType = ref([]);
async function getAllType() {
  listType.value = await AxiosAPI.getAllType();
}
getAllType();
async function update() {
  if (!Product.value.productName) return alert("Product name cannot be empty");
  if (Product.value.type === 0) return alert("Product type cannot be empty");
  if (!Product.value.PrdImage) return alert("Product image cannot be empty");
  if (!Product.value.description)
    return alert("Product description cannot be empty");
  if (
    !(
      Number.isInteger(Product.value.quantity * 1) &&
      Product.value.quantity !== "" &&
      Product.value.quantity * 1 > 0
    )
  ) {
    Product.value.quantity = 1;
    return alert("Product quantity must be greater than 0");
  }
  if (
    !(
      Number.isInteger(Product.value.price * 1) &&
      Product.value.price !== "" &&
      Product.value.price * 1 > 0
    )
  ) {
    Product.value.price = 10000;
    return alert("Product price must be greater than 0");
  }

  await AxiosAPI.updateProduct(props.id, Product.value);
  alert("Edit product successfully");
  router.go(-1);
}
async function create() {
  if (!Product.value.productName) return alert("Product name cannot be empty");
  if (Product.value.type === 0) return alert("Product type cannot be empty");
  if (!Product.value.PrdImage) return alert("Product image cannot be empty");
  if (!Product.value.description)
    return alert("Product description cannot be empty");
  if (
    !(
      Number.isInteger(Product.value.quantity * 1) &&
      Product.value.quantity !== "" &&
      Product.value.quantity * 1 > 0
    )
  ) {
    Product.value.quantity = 1;
    return alert("Product quantity must be greater than 0");
  }
  if (
    !(
      Number.isInteger(Product.value.price * 1) &&
      Product.value.price !== "" &&
      Product.value.price * 1 > 0
    )
  ) {
    Product.value.price = 10000;
    return alert("Product price must be greater than 0");
  }

  await AxiosAPI.addProduct(Product.value);
  alert("Add product successfully");
  router.go(-1);
}
</script>

<style>
.product-edit {
  width: 610px;
  box-shadow: 5px 10px 10px black;
  margin: 60px auto;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 5px;
}
.btn-return {
  color: red;
}
.btn-return:hover {
  background-color: red;
  color: white;
}
.btn-confirm,
.btn-create {
  color: blue;
}
.btn-confirm:hover,
.btn-create:hover {
  background-color: blue;
  color: white;
}
.product-name-edit,
.product-type-edit,
.product-price-edit,
.product-quantity-edit,
.product-img-edit,
.product-desc-edit {
  padding-left: 10vw;
}
.product-name-edit {
  margin-top: 10px;
}
</style>
