<template>
  <footer class="c-footer d-flex justify-content-center align-items-center">
    <a href="/"><img src="@/assets/img/logo2.png" width="54" height="21.25" alt="Everything List Logo" style="margin-top: -10px;"/></a>
    |
    <p class="fs-6">All Rights Reserved.</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterDefault'
})
</script>

<style scoped lang="scss">
  @import '@/assets/scss/main';

  .c-footer {
    height: 60px;

    a,p {
      margin: 0 $gutter;
    }
  }
</style>
