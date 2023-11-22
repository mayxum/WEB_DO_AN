<template>
  <div class="small-container">
    <div class="row">
      <div class="card-change-pass">
        <div class="card-header text-center"></div>
        <div class="card-body text-center">
          <div class="g-3 justify-content-center mb-3">
            <div>
              <label for="username" class="col-form-label">Account</label>
            </div>
            <div class="col-auto">
              <input
                type="text"
                id="username"
                class="form-control"
                disabled
                :value="$props.info.username"
              />
            </div>
          </div>

          <div class="g-3 align-items-center justify-content-center mb-3">
            <div>
              <label for="passNow" class="col-form-label"
                >Current password</label
              >
            </div>
            <div class="col-auto">
              <input
                type="password"
                id="passNow"
                class="form-control"
                v-model="pass"
                @change="checkPass(pass, props.info.password)"
              />
            </div>
          </div>
          <div class="g-3 align-items-center justify-content-center mb-3">
            <div>
              <label for="passNew" class="col-form-label justify-content-start"
                >New password</label
              >
            </div>
            <div class="col-auto">
              <input
                type="password"
                id="passNew"
                class="form-control"
                v-model="newData.password"
              />
            </div>
          </div>
          <div class="g-3 align-items-center justify-content-center mb-3">
            <div>
              <label for="rePassNew" class="col-form-label"
                >Repeat password again</label
              >
            </div>
            <div class="col-auto">
              <input
                type="password"
                id="rePassNew"
                class="form-control"
                v-model="reNewPass"
                @change="checkPass2(reNewPass, newData.password)"
              />
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="d-grid gap-3 d-md-flex justify-content-md-center">
            <button
              class="btn changepass-btn"
              type="button"
              @click="ChangePassword"
            >
              Change
            </button>
            <button
              class="btn changepass-return-btn"
              type="button"
              @click.prevent="$router.go(-1)"
            >
              Return
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["info"]);
import { ref } from "vue";
import { useRouter } from "vue-router";
import AxiosAPI from "../services/api.service";
const pass = ref();
const reNewPass = ref();
function checkPass(passCheck, passTrue) {
  if (passCheck != passTrue) {
    pass.value = "";
    return alert("Password is incorrect");
  }
}
function checkPass2(passCheck, passTrue) {
  if (passCheck != passTrue) {
    reNewPass.value = "";
    return alert("Password is not the same");
  }
}
const newData = ref({
  password: undefined,
});

const router = useRouter();

async function ChangePassword() {
  if (!pass.value) return alert("Please enter old password");
  if (!newData.value.password) return alert("Please enter new password");
  if (!reNewPass.value) return alert("Please enter new password again");
  await AxiosAPI.UpdateAccount(props.info._id, newData.value);
  alert("Changed password successfully");
  return router.go(-1);
}

const info = ref(JSON.parse(localStorage.info));
</script>

<style scoped>
.card-change-pass {
  width: 550px;
  border-radius: 5px;
  box-shadow: 5px 10px 10px black;
  margin: 50px auto;
  padding-bottom: 10px;
}
.changepass-btn {
  color: blue;
}
.changepass-btn:hover {
  background-color: blue;
  color: white;
}
.changepass-return-btn {
  color: red;
}
.changepass-return-btn:hover {
  background-color: red;
  color: white;
}
</style>
