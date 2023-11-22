<template>
  <div class="small-container order-card">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
          <a class="nav-link">
            <router-link :to="`/myorder/${props.id}`">
              Current
            </router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"> All </a>
        </li>
      </ul>
    </div>
    <div class="card-body">
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
              <button
                type="button"
                class="btn btn-outline-success"
                @click="$router.push(`/orderdetail/${i._id}`)"
              >
                Detail
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card-footer text-center">
      <button class="btn order-return-btn" @click="$router.push('/dashboard')">
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

async function getListBill() {
  listBill.value = await AxiosAPI.getAllBillUID(props.id);
}
getListBill();
</script>
