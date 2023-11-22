<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" width="80" height="80" href="#">
        <img src="src\assets\logo.png" width="90" height="90" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" href="#" aria-current="page">
              <router-link to="/" class="homeRouterLink">
                Homepage
              </router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="">
              <router-link to="/product" class="RouterLink">
                Products
              </router-link>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle active"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Account
            </a>
            <ul class="dropdown-menu">
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  @click="$router.push('login')"
                >
                  <router-link to="/login" class="loginRouterLink">
                    Login
                  </router-link>
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  @click="$router.push('signup')"
                >
                  <router-link to="/signup" class="sigupRouterLink"
                    >Register</router-link
                  >
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="" aria-disabled="true">
              <router-link to="/cart" class="cartRouterLink">
                <i class="fa-solid fa-cart-shopping"></i>
              </router-link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
a {
  text-decoration: none;
  color: #3c3636;
  font-size: 20px;
}
p {
  color: #555;
}
.row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
}
.col-2 {
  flex-basis: 50%;
  min-width: 300px;
}
.col-2 img {
  max-width: 100%;
  padding: 50px 0;
}
.col-2 h1 {
  font-size: 50px;
  line-height: 60px;
  margin: 25px 0;
}
.btn-explore {
  display: inline-block;
  background: #5269db;
  color: #fff;
  padding: 8px 30px;
  margin: 30px 0;
  border-radius: 30px;
}
.RouterLink,
.cartRouterLink,
.homeRouterLink,
.loginRouterLink,
.sigupRouterLink {
  color: white;
  font-size: 15px;
}
</style>

<script>
export default {
  data() {
    return {
      menu: null,
    };
  },
  methods: {
    setMenu(selectedMenu) {
      this.menu = selectedMenu;
    },
  },
};
</script>
