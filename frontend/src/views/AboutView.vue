<template>
  <HeaderDefault />
  <main class="about">
    <h1>This is an about page</h1>
  </main>
  <FooterDefault />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderDefault from '@/components/common/HeaderDefault.vue'
import FooterDefault from '@/components/common/FooterDefault.vue'

export default defineComponent({
  name: 'AboutView',
  components: {
    HeaderDefault,
    FooterDefault
  }
})
</script>
