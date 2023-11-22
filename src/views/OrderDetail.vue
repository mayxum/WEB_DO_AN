<template>
  <div class="small-container order-detail-card">
    <div class="card-header text-center">
      <h3>
        <strong>Order Detail</strong>
        <hr />
      </h3>
    </div>
    <div class="small-container">
      <div class="row">
        <div class="col-3">
          <div>
            <strong>ID:</strong>
          </div>
          <div>{{ bill._id }}</div>
          <div>
            <strong>Status:</strong>
          </div>
          <div>{{ indexStatus[bill.status] }}</div>
        </div>
        <div class="col-3">
          <div>
            <strong>Ordered date:</strong>
          </div>
          <div>{{ bill.createDate }}</div>
          <div>
            <strong>Delivered date:</strong>
          </div>
          <div>
            {{ bill.deliveryDate == -1 ? "Chưa Giao Hàng" : bill.deliveryDate }}
          </div>
        </div>
        <div class="col-3">
          <div>
            <strong>Total:</strong>
          </div>
          <div>
            {{
              bill.value.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })
            }}
          </div>
        </div>
      </div>
    </div>

    <div class="mt-3">
      <table class="table text-center">
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        <tbody>
          <tr
            class="align-middle"
            v-for="(i, index) in bill.detail.prdId"
            :key="i._id"
          >
            <td>{{ i.productName }}</td>
            <td>
              {{
                i.price.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })
              }}
            </td>
            <td>
              {{ bill.detail.quantity[index] }}
            </td>
            <td>
              {{
                (i.price * bill.detail.quantity[index]).toLocaleString(
                  "it-IT",
                  { style: "currency", currency: "VND" }
                )
              }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card-footer text-center">
      <button class="btn order-return-btn" @click="$router.go(-1)">
        Return
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["mahoadon"]);
import { ref } from "vue";
import AxiosAPI from "../services/api.service";

const indexStatus = [
  "Order cancelled",
  "Order received",
  "Order confirmed",
  "Delivering",
  "Order paid",
];

const bill = ref();
const user = ref();
async function getInfo() {
  bill.value = await AxiosAPI.getBillDetailByID(props.mahoadon);
}
getInfo();
</script>

<style>
.order-detail-card {
  width: 1000px;
  box-shadow: 5px 10px 10px black;
  text-align: center;
  margin: 50px auto;
  border-radius: 10px;
}
.order-return-btn {
  color: red;
}
.order-detail-btn:hover {
  background-color: red;
  color: white;
}
</style>
