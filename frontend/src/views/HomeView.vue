<template>
  <Header />
  <main class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </main>
  <Footer />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/common/Header.vue' // @ is an alias to /src
import Footer from '@/components/common/Footer.vue'

@Options({
  components: {
    HelloWorld,
    Header,
    Footer
  }
})
export default class HomeView extends Vue {}
</script>
