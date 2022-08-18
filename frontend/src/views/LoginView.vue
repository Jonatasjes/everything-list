<template>
  <main class="c-login container">
    <div class="c-login__content">
      <div class="text-center">
        <h1 class="fs-2 fw-bold">Everything List</h1>
        <p>Everyone needs to have control about your life, so start with a list!</p>
      </div>

      <form class="l-login-form">
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
        <div class="l-login-form__check form-check text-start d-flex align-items-center">
          <input class="form-check-input" type="checkbox" value="" id="save-checkbox">
          <label class="form-check-label" for="save-checkbox">
            Would you like to save your data.
          </label>
        </div>

        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
    </div>

  </main>
  <FooterDefault />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FooterDefault from '@/components/common/FooterDefault.vue'

export default defineComponent({
  name: 'AboutView',
  components: {
    FooterDefault
  }
})
</script>

<style scoped lang="scss">
  @import '@/assets/scss/main';

  .c-login__content {
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

    .l-login-form__check {
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
