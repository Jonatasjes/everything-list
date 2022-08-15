<template>
  <footer class="d-flex justify-content-center align-items-center">
    <a href="/"><img src="@/assets/img/logo2.png" width="54" height="21.25" alt="Everything List Logo" style="margin-top: -10px;"/></a>
    |
    <p class="fs-6">All Rights Reserved.</p>
  </footer>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class Footer extends Vue {}
</script>

<style scoped lang="scss">

  @import '@/assets/scss/main';

  footer {
    height: 60px;

    a,p {
      margin: 0 $gutter;
    }
  }
</style>
