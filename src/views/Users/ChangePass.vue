<template>
  <ChangePass :info="info"></ChangePass>
</template>

<script setup>
import { ref } from "vue";
import ChangePass from "../../components/ChangePassComponent.vue";
const info = ref(JSON.parse(localStorage.info));
</script>
