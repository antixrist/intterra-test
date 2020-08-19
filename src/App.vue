<template>
  <div id="app" class="container">
    <div>
      <UiSortingIcon direction="asc" />
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import UiSortingIcon from '@/components/ui/UiSortingIcon.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    UiSortingIcon,
  },
});
</script>

<style lang="scss">
@import '@/assets/styles/main';

#app {
  padding-top: 24px;
  padding-bottom: 24px;
}
</style>
