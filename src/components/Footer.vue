<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-col-1">
          <h3>Download our app</h3>
          <p>Download app for Android and IOS devices.</p>
          <div class="app-logo">
            <img src="src/assets/play-store.png" />
            <img src="src/assets/app-store.png" width="80px" />
          </div>
        </div>
        <div class="footer-col-2">
          <img src="src\assets\logo.png" />
          <p>
            Our purpose is to make the sport wears accessible to many people.
          </p>
        </div>
        <div class="footer-col-3">
          <h3>Useful links</h3>
          <ul>
            <li>Coupons</li>
            <li>Blog</li>
            <li>Policy</li>
            <li>Affiliate</li>
          </ul>
        </div>
        <div class="footer-col-4">
          <h3>Social media</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  max-width: 1300px;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;
}
.footer {
  background: rgb(37, 37, 37);
  color: #8a8a8a;
  font-size: 14px;
  padding: 60px 0 20px;
}
.footer p {
  color: #8a8a8a;
}
.footer h3 {
  color: white;
  margin-bottom: 20px;
}
.footer-col-1,
.footer-col-2,
.footer-col-3,
.footer-col-4 {
  min-width: 250px;
  margin-bottom: 20px;
}
.footer-col-1 {
  flex-basis: 30%;
}
.footer-col-2 {
  flex: 1;
  text-align: center;
}
.footer-col-2 img {
  width: 180px;
  margin-bottom: 20px;
}
.footer-col-3,
.footer-col-4 {
  flex-basis: 12%;
  text-align: center;
}
ul {
  list-style: none;
}
.app-logo {
  margin-top: 20px;
}
.app-logo img {
  width: 140px;
}
.footer-col-2 img {
  width: 130px;
  height: 120px;
}
</style>
