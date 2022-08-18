<template>
  <HeaderDefault />
  <main class="c-home">
    <div class="container">
      <div class="c-home__header">
        <h2 class="fs-4">Welcome to Everything List APP!</h2>
        <p>Here you can choice what kind of list do you want to use.</p>
      </div>

      <div class="c-home__body">
        <ul class="d-flex flex-wrap justify-content-around">
          <li class="c-home__links">
            <router-link to="/tasks" class="nav-link py-2 px-2 px-lg-2 card">
              <h5 class="fs-6">All Tasks</h5>
              <font-awesome-icon icon="fa-solid fa-list-check" />
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </main>
  <FooterDefault />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderDefault from '@/components/common/HeaderDefault.vue'
import FooterDefault from '@/components/common/FooterDefault.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderDefault,
    FooterDefault
  }
})
</script>

<style scoped lang="scss">
  @import '@/assets/scss/main';

  .c-home__header {
    padding: ($gutter * 2) 0;

    h2 {
      margin-bottom: $gutter * 3;
    }
  }

  .c-home__links {
    padding: ($gutter * 2) 0;
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 120px;
      height: 120px;
      h5 {
        margin-bottom: $gutter;
      }
      svg {
        width: 40px;
        height: 40px;
      }

      &:hover {
        color: $white;
        background-color: $darkColor;
      }
    }
  }

</style>
