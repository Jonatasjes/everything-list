<template>
  <main class="login">
    <h1>This is an about page</h1>
  </main>
  <Footer />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

import Footer from '@/components/common/Footer.vue'

@Options({
  components: {
    Footer
  }
})

export default class LoginView extends Vue {}

</script>
