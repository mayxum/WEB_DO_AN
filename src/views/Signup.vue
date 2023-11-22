<template>
  <div class="row">
    <form class="m-3 register-form">
      <div class="text-center m-2">
        <h2 class="sign-title register-form-title">Register Form</h2>
      </div>

      <!-- Username input -->
      <div class="form-outline form-floating m-2">
        <input
          type="text"
          id="registerUsername"
          class="form-control"
          placeholder="Username"
          v-model="data.username"
          @change="checkUsername"
        />
        <label class="form-label" for="registerUsername">Username</label>
      </div>

      <!-- Email input -->
      <div class="form-outline form-floating m-2">
        <input
          type="email"
          id="registerEmail"
          class="form-control"
          placeholder="Email"
          v-model="data.email"
        />
        <label class="form-label" for="registerEmail">Email</label>
      </div>

      <!-- Name input -->
      <div class="form-outline form-floating m-2">
        <input
          type="text"
          id="registerName"
          class="form-control"
          placeholder="Name"
          v-model="data.name"
        />
        <label class="form-label" for="registerName">Full name</label>
      </div>

      <!-- Password input -->
      <div class="form-outline form-floating m-2">
        <input
          type="password"
          id="registerPassword"
          class="form-control"
          placeholder="Password"
          v-model="data.password"
        />
        <label class="form-label" for="registerPassword">Password</label>
      </div>

      <!-- Confirm password input -->
      <div class="form-outline form-floating m-2">
        <input
          type="password"
          id="registerRepeatPassword"
          class="form-control"
          placeholder="Confirm password"
          v-model="rePass"
          @change="checkPass"
        />
        <label class="form-label" for="registerRepeatPassword"
          >Confirm password</label
        >
      </div>

      <!-- Phone number input -->
      <div class="form-outline form-floating m-2">
        <input
          type="tel"
          id="registerPhone"
          class="form-control"
          placeholder="Phone"
          v-model="data.phone"
        />
        <label class="form-label" for="registerPhone">Phone number</label>
      </div>

      <!-- Address -->
      <div class="form-outline form-floating m-2">
        <input
          type="text"
          id="registerAddress"
          class="form-control"
          placeholder="Phone"
          v-model="data.address"
        />
        <label class="form-label" for="registerAddress">Address</label>
      </div>

      <!-- Checkbox -->
      <div class="form-check d-flex justify-content-center m-3">
        <input
          class="form-check-input me-2"
          type="checkbox"
          value=""
          id="registerCheck"
          checked
          aria-describedby="registerCheckHelpText"
        />
        <label class="form-check-label" for="registerCheck">
          I agree with Terms & Condition and Privacy Policy.
        </label>
      </div>

      <!-- Submit button -->
      <div class="text-center mb-4 register-btn">
        <button type="submit" class="btn btn-primary" @click.prevent="Signup">
          Register
        </button>
      </div>

      <div class="text-center mb-2">
        <router-link to="/login">
          <p>
            Already have an account ? <br />
            Login now
          </p>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AxiosAPI from "../services/api.service";
const rePass = ref();
const data = ref({
  username: undefined,
  password: undefined,
  name: undefined,
  phone: undefined,
  email: undefined,
  address: undefined,
  role: 1,
});

function checkPass() {
  if (data.value.password !== rePass.value) {
    rePass.value = "";
    alert("Password does not match.");
  }
}
async function checkUsername() {
  const result = await AxiosAPI.Login(data.value.username);
  if (result.isAvailable) {
    data.value.username = "";
    alert("Account already exist.");
  }
  return result.isAvailable;
}
async function Signup() {
  if (!data.value.username) return alert("Please enter username.");
  if (!data.value.password) return alert("Please enter password.");
  if (!rePass.value) return alert("Please enter password again.");
  if (!data.value.name) return alert("Please enter full name.");
  if (!data.value.email) return alert("Please enter email.");
  if (!data.value.phone) return alert("Please enter phone number.");
  if (!data.value.address) return alert("Please enter address.");
  await AxiosAPI.Register(data.value);
  data.value = { role: 1 };
  rePass.value = "";
  return alert("Register successfully.");
}
</script>

<style>
.register-form {
  width: 550px;
  box-shadow: 5px 10px 10px black;
  text-align: center;
  margin: 80px auto;
}
.form-control {
  border-radius: 5px;
}
.form-label,
.form-check-label,
.sign-title {
  color: black;
}
.register-btn {
  color: orange;
}
.register-form-title {
  font-weight: bold;
}
</style>
