<template>
  <header class="container d-flex justify-content-between align-items-center">
    <h1 class="fs-5">Everything List</h1>
    <nav class="d-flex align-items-center">
      <router-link to="/" class="nav-link py-2 px-2 px-lg-2">Home</router-link> |
      <router-link to="/about" class="nav-link py-2 px-2 px-lg-2">About</router-link>
      <router-link to="/login" class="btn-logout btn btn-outline-dark">Logout</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class Header extends Vue {}
</script>

<style scoped lang="scss">
header {
  position: fixed;
  height: 60px;
  top: 0;
  left: 0;
  right: 0;
}

nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #01beee;
    }

    &:hover {
      opacity: .5;
    }
  }
}

.btn-logout {
  margin-left: 16px;
}
</style>
