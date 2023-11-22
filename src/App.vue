<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div id="'app'">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style>
#app {
  font-family: "Montserrat", sans-serif;
  font-family: "Open Sans", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
