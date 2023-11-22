<template>
  <div class="row dashboard-card">
    <div class="user bg-white">
      <h3 class="user-dashboard">User Dashboard</h3>
      <hr />
      <div class="body-div">
        <div class="align-items-center m-3">
          <div>
            <label for="username" class="col-form-label">Account</label>
          </div>
          <div>
            <input
              type="text"
              id="username"
              class="form-control"
              disabled
              :value="info.username"
            />
          </div>
          <div>
            <label for="name" class="col-form-label">Full name</label>
          </div>
          <div>
            <input
              type="text"
              id="name"
              class="form-control"
              disabled
              v-model="info.name"
              v-if="!isSetting"
            />
            <input
              type="text"
              id="name"
              class="form-control"
              v-model="info.name"
              v-else
            />
          </div>
          <div>
            <label for="phone" class="col-form-label">Phone</label>
          </div>
          <div>
            <input
              type="text"
              id="phone"
              class="form-control"
              disabled
              v-model="info.phone"
              v-if="!isSetting"
            />
            <input
              type="text"
              id="phone"
              class="form-control"
              v-model="info.phone"
              v-else
            />
          </div>
          <div>
            <label for="phone" class="col-form-label">Address</label>
          </div>
          <div>
            <input
              type="text"
              id="address"
              disabled
              class="form-control"
              v-model="info.address"
              v-if="!isSetting"
            />
            <input
              type="text"
              id="address"
              class="form-control"
              v-model="info.address"
              v-else
            />
          </div>
        </div>

        <div class="align-items-center m-3">
          <div>
            <label for="email" class="col-form-label">Email</label>
          </div>
          <div>
            <input
              type="text"
              id="email"
              class="form-control"
              disabled
              v-model="info.email"
              v-if="!isSetting"
            />
            <input
              type="text"
              id="email"
              class="form-control"
              v-model="info.email"
              v-else
            />
          </div>
        </div>
      </div>
      <hr />
      <div class="footer-element m-4">
        <div class="d-grid d-md-flex justify-content-md-around">
          <button
            class="btn ds-edit-btn"
            type="button "
            @click="isSetting = !isSetting"
            v-if="!isSetting"
          >
            Edit
          </button>
          <button
            class="btn ds-confirm-btn"
            type="button"
            @click="UpdateInfo"
            v-else
          >
            Confirm
          </button>
          <router-link to="/dashboard/changepass">
            <button class="btn ds-change-btn" type="button">
              Change password
            </button>
          </router-link>
          <router-link :to="'/myorder/' + root._id" v-if="isLogin === 'user'">
            <button class="btn ds-order-btn" type="button">My order</button>
          </router-link>
          <router-link  :to="'/stafforder'" v-else>
            <button class="btn ds-manage-btn" type="button">
              Manage order
            </button>
          </router-link>
          <router-link to="/login">
            <button class="btn ds-logout-btn" type="button" @click="DangXuat">
              Logout
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AxiosAPI from "../../services/api.service";
const root = JSON.parse(localStorage.info);
const info = ref({ ...root });
delete info.value._id;
const isSetting = ref(false);
const isLogin = localStorage.isLogin;
async function UpdateInfo() {
  isSetting.value = !isSetting.value;
  await AxiosAPI.UpdateAccount(root._id, info.value);
  alert("Update user infomation successfully");
  localStorage.info = JSON.stringify({ _id: root._id, ...info.value });
}
function DangXuat() {
  localStorage.clear();
}
</script>

<style>
.dashboard-card {
  width: 500px;
  box-shadow: 5px 10px 10px black;
  margin: 50px auto;
  border-radius: 10px;
  padding-top: 10px;
}
.user {
  width: 75vw;
  padding-right: 50px;
}
.user-dashboard {
  font-weight: bold;
  text-align: center;
}
.ds-order-btn,
.ds-edit-btn,
.ds-confirm-btn,
.ds-change-btn,
.ds-manage-btn {
  color: blue;
}
.ds-order-btn:hover,
.ds-edit-btn:hover,
.ds-confirm-btn:hover,
.ds-change-btn:hover,
.ds-manage-bt:hover {
  background-color: blue;
  color: white;
}
.ds-logout-btn {
  color: red;
}
.ds-logout-btn:hover {
  background-color: red;
  color: white;
}
</style>
