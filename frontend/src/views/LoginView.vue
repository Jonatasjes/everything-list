<template>
  <main class="login container">
    <div class="content">
      <div class="text-center">
        <h1 class="fs-2 fw-bold">Everything List</h1>
        <p>Everyone needs to have control about your life, so start with a list!</p>
      </div>

      <form>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3">
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3">
          </div>
        </div>
        <div class="save-info-check form-check text-start d-flex align-items-center">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Would you like to save your data.
          </label>
        </div>

        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
    </div>

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

<style scoped lang="scss">
  @import '@/assets/scss/main';

  .content {
    max-width: 516px;
    margin: auto;

    h1,p {
      margin: ($gutter * 5) 0;
    }

    button {
      width: 100%;
      background-color: $primaryColor;
      border: none;

      &:hover {
        background-color: $darkColor;
      }
    }

    .save-info-check {
      padding-left: 0;
      margin-bottom: $gutter * 2;
      > input {
        margin: 0;
      }

      > label {
        margin-left: $gutter;
        font-size: .9rem;
      }
    }
  }
</style>
