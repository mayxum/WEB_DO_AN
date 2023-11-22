<template>
  <div class="small-container await-order-card">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link">
            <router-link :to="`/stafforder`"> Await </router-link>
          </a>
        </li>

        <li class="nav-item active">
          <a class="nav-link active"> Process </a>
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
            <th scope="row">{{ i._id }}</th>
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
                  v-if="i.status < 4"
                  type="button"
                  class="btn btn-outline-primary"
                  @click="nextStatus(i._id, i.status)"
                >
                  {{ handler[i.status] }}
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="else text-center m-5" v-else>
      <h3><strong>No order to deliver</strong></h3>
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
const handler = ["Confirmed Cancelled", "2", "Deliver", "Order paid"];

async function getListBill() {
  listBill.value = await AxiosAPI.getBillBySID(SID);
}
getListBill();

function getNow() {
  const now = new Date();
  const date = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  return `${year}-${month}-${date}`;
}
const now = getNow();
const nowTime = ref();

async function nextStatus(BID, status) {
  nowTime.value = now;
  if (status === 0) {
    await AxiosAPI.doneBill(BID, -1);
  }
  if (status < 3) await AxiosAPI.nextStatus(BID);
  else await AxiosAPI.doneBill(BID, nowTime.value);
  getListBill();
}
</script>

<style scoped>
.card {
  width: 75vw;
}
</style>
