<template>
  <router-view/>
</template>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap';
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import '@/assets/scss/reset';
@import '@/assets/scss/main';

#app {
  min-height: 100vh;
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $darkColor;

  > main,
  > div {
    min-height: calc(100vh - 60px);
    padding-top: 80px;
  }
}
</style>
