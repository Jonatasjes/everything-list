<template>
  <header class="c-header shadow d-flex justify-content-between align-items-center">
    <div class="container d-flex justify-content-between align-items-center">
      <h1 class="c-header__title fs-5">Everything List</h1>
      <nav class="c-header__nav d-flex align-items-center">
        <router-link to="/" class="nav-link py-2 px-2 px-lg-2">Home</router-link> |
        <router-link to="/tasks" class="nav-link py-2 px-2 px-lg-2">Tasks</router-link> |
        <router-link to="/about" class="nav-link py-2 px-2 px-lg-2">About</router-link>
        <router-link to="/login" class="js-btn-logout btn btn-outline-dark">Logout</router-link>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderDefault'
})
</script>

<style scoped lang="scss">

@import '@/assets/scss/main';

.c-header {
  position: fixed;
  height: 60px;
  top: 0;
  left: 0;
  right: 0;
}
.c-header__nav {
  a {
    font-weight: bold;
    color: $darkColor;
    text-decoration: none;

    &.router-link-exact-active {
      color: $primaryColor;
    }

    &:hover {
      opacity: .5;
    }

    &.js-btn-logout {
      &:hover {
        color: $white;
      }
    }
  }
}

.c-header .js-btn-logout {
  margin-left: $gutter * 2;
}
</style>
