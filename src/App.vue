<template>
  <div id="app" class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import '~@/assets/styles/main';

#app {
  padding-top: 24px;
  padding-bottom: 24px;
}
</style>
