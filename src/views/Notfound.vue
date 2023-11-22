<template>
  <div class="text-center mt-10">
    <h2>Page not found.</h2>
    <a class="b" @click.prevent="router.go(-1)">
      <h3>Return to homepage</h3>
    </a>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>
