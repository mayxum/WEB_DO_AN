<template>
  <div>
    <Hero />
    <div class="brands">
      <div class="small-container">
        <div class="row">
          <div class="col-5">
            <img src="src/assets/logo-godrej.png" />
          </div>
          <div class="col-5">
            <img src="src/assets/logo-oppo.png" />
          </div>
          <div class="col-5">
            <img src="src/assets/logo-coca-cola.png" />
          </div>
          <div class="col-5">
            <img src="src/assets/logo-paypal.png" />
          </div>
          <div class="col-5">
            <img src="src/assets/logo-philips.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Hero from "../components/Hero.vue";
</script>

<style>
.brands {
  margin: 20px auto;
}
.col-5 {
  width: 160px;
}
.col-5 img {
  width: 100%;
  cursor: pointer;
  filter: grayscale(100%);
}
.col-5 img:hover {
  filter: grayscale(0);
}
</style>
