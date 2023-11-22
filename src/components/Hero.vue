<template>
  <div class="categories">
    <div class="small-container">
      <div class="row">
        <div class="col-3">
          <img src="src/assets/category-1.jpg" />
        </div>
        <div class="col-3">
          <img src="src/assets/category-2.jpg" />
        </div>
        <div class="col-3">
          <img src="src/assets/category-3.jpg" />
        </div>
      </div>
    </div>
  </div>

  <div class="small-container">
    <h2 class="title">Featured Products</h2>
    <div class="row">
      <div class="col-4">
        <img src="images/product-4.jpg" />
        <h4>Puma Purple T-shirt</h4>
        <!-- <p>500.000 VND</p> -->
      </div>
      <div class="col-4">
        <img src="images/product-8.jpg" />
        <h4>Black Fossil Watch</h4>
        <!-- <p>1.950.000.000 VND</p> -->
      </div>
      <div class="col-4">
        <img src="images/product-7.jpg" />
        <h4>HRX Socks</h4>
        <!-- <p>$20.00</p> -->
      </div>
      <div class="col-4">
        <img src="images/product-3.jpg" />
        <h4>Benetton Jogger</h4>
        <!-- <p>$70.00</p> -->
      </div>
    </div>
    <h2 class="title">New Products</h2>
    <div class="row">
      <div class="col-4">
        <img src="images/product-1.jpg" />
        <h4>Puma Crimson T-shirt</h4>
        <!-- <p>$50.00</p> -->
      </div>
      <div class="col-4">
        <img src="images/product-2.jpg" />
        <h4>HRX Black Sneaker</h4>
        <!-- <p>$350.00</p> -->
      </div>
      <div class="col-4">
        <img src="images/product-12.jpg" />
        <h4>Nike Jogger</h4>
        <!-- <p>$40.00</p> -->
      </div>
      <div class="col-4">
        <img src="images/product-9.jpg" />
        <h4>Roadster Watch</h4>
        <!-- <p>$90.00</p> -->
      </div>
      <div class="col-4">
        <img src="images/product-5.jpg" />
        <h4>HRX White Sneaker</h4>
        <!-- <p>$150.00</p> -->
      </div>
      <div class="col-4">
        <img src="images/product-10.jpg" />
        <h4>HRX Special Sneaker</h4>
        <!-- <p>$150.00</p> -->
      </div>
      <div class="col-4">
        <img src="images/product-11.jpg" />
        <h4>Roadster Sneaker</h4>
        <!-- <p>$20.00</p> -->
      </div>
      <div class="col-4">
        <img src="images/product-6.jpg" />
        <h4>Puma Green T-shirt</h4>
        <!-- <p>$70.00</p> -->
      </div>
    </div>
  </div>
</template>

<style>
.categories {
  margin: 70px 0;
}
.col-3 {
  flex-basis: 30%;
  min-width: 250px;
  margin-bottom: 30px;
}
.col-3 img {
  width: 100%;
}
.small-container {
  max-width: 1080px;
  margin: auto;
  padding: 25px;
  padding-right: 25px;
}
.col-4 {
  flex-basis: 25%;
  padding: 10px;
  min-width: 200px;
  margin-bottom: 50px;
  transition: transform 0.5s;
}
.col-4 img {
  width: 100%;
}
.title {
  text-align: center;
  margin: 0 auto 80px;
  position: relative;
  line-height: 60px;
  color: #555;
}
.title::after {
  content: "";
  background: #ff523b;
  width: 80px;
  height: 5px;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  left: 50px;
  transform: translateX(540%);
}
h4 {
  color: #555;
  font-weight: normal;
}
.col-4 p {
  font-size: 15px;
}
.col-4:hover {
  transform: translateY(-15px);
}
</style>
