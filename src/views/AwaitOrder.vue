<template>
  <div class="small-container await-order-card">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link active"> Await </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link :to="`/stafforder/${SID}`"> Process </router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link :to="`/stafforder/${SID}/all`"> All </router-link>
          </a>
        </li>
      </ul>
    </div>

    <div class="card-body" v-if="listBill.length > 0">
      <table class="table text-center">
        <tr>
          <th>ID</th>
          <th>Total</th>
          <th>Date</th>
          <th>Status</th>
          <th></th>
        </tr>
        <tbody>
          <tr class="align-middle" v-for="i in listBill" :key="i._id">
            <th>{{ i._id }}</th>
            <td>
              {{
                i.value.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })
              }}
            </td>
            <td>{{ i.createDate }}</td>
            <td>{{ indexStatus[i.status] }}</td>

            <td>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-outline-success"
                  @click="$router.push(`/orderdetail/${i._id}`)"
                >
                  Detail
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  @click="validBill(i._id)"
                >
                  Confirm
                </button>
              </div>
            </td>
          </tr>
          {{
            product
          }}
        </tbody>
      </table>
    </div>
    <div class="else text-center m-5" v-else>
      <h3><strong>No order</strong></h3>
    </div>
    <div class="card-footer text-center">
      <button
        class="btn staff-order-return-btn"
        @click="$router.push('/dashboard')"
      >
        Return
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AxiosAPI from "../services/api.service";

const props = defineProps(["id"]);
const listBill = ref([]);
const indexStatus = [
  "Order cancelled",
  "Order received",
  "Order confirmed",
  "Delivering",
  "Order paid",
];
const SID = JSON.parse(localStorage.info)._id;

async function getListBill() {
  listBill.value = await AxiosAPI.getNonVaildBill();
}
getListBill();

async function validBill(BID) {
  await AxiosAPI.validBill(BID, SID);
  getListBill();
}
</script>

<style>
.await-order-card {
  width: 950px;
  box-shadow: 5px 10px 10px black;
  margin: 50px auto;
  border-radius: 10px;
  padding-top: 10px;
}
.th {
  padding: 5px;
  color: #fff;
  background: #ff523b;
  font-weight: normal;
}
.staff-order-return-btn {
  color: red;
}
.staff-order-return-btn:hover {
  background-color: red;
  color: white;
}
</style>
