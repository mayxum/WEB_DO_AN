<template>
  <div class="row">
    <div class="login-form">
      <form>
        <div class="text-center m-3">
          <h2 class="login-title login-form-title">
            Login Form
            <hr />
          </h2>
        </div>

        <!-- Username input -->
        <div class="form-outline form-floating m-4">
          <input
            type="text"
            id="registerUsername"
            class="form-control"
            placeholder="Username"
            v-model="inputData.username"
          />
          <label class="form-label" for="registerUsername">Username</label>
        </div>

        <!-- Password input -->
        <div class="form-outline form-floating m-4">
          <input
            type="password"
            id="registerPassword"
            class="form-control"
            placeholder="Password"
            v-model="inputData.password"
          />
          <label class="form-label" for="registerPassword">Password</label>
        </div>

        <span class="text-center">
          <router-link to="/signup">
            <p class="register">
              Don't have an account ? <br />
              Register here.
            </p>
          </router-link>
        </span>

        <!-- Submit button -->
        <div class="text-center mb-3 mt-3">
          <button type="submit" class="btn btn-primary" @click.prevent="Login">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import AxiosAPI from "../services/api.service.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const inputData = ref({
  username: undefined,
  password: undefined,
});

const router = useRouter();

const result = ref("Init");

if (localStorage.isLogin) router.push("/dashboard");

async function Login() {
  result.value = await AxiosAPI.Login(
    inputData.value.username,
    inputData.value.password
  );

  if (!result.value.isAvailable) {
    inputData.value.username = "";
    return alert("Cannot find account information ");
  }

  if (!result.value.isTruePassword) {
    inputData.value.password = "";
    return alert("Password is incorrect.");
  }

  const roleTable = {
    1: "user",
    2: "staff",
    3: "admin",
  };

  localStorage.info = JSON.stringify(result.value.infomation);
  localStorage.isLogin = roleTable[result.value.infomation.role];

  router.push(`/dashboard`);
}
</script>

<style>
.login-form {
  width: 550px;
  box-shadow: 5px 10px 10px black;
  text-align: center;
  margin: 80px auto;
}
.form-control {
  border-radius: 5px;
}
.form-label,
.login-title {
  color: black;
}
.register {
  text-decoration: none;
}
.login-form-title {
  font-weight: bold;
}
</style>
