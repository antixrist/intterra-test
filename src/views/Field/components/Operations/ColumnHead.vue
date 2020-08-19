<template>
  <th class="column-head">
    <slot />
    <UiSortingIcon class="sorting-icon" v-if="sortable" :direction="direction" />
  </th>
</template>

<script>
import UiSortingIcon from '@/components/ui/UiSortingIcon.vue';

export default {
  components: {
    UiSortingIcon,
  },
  props: {
    sortable: Boolean,
    direction: String,
  },
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.column-head {
  font-size: 11px;
  letter-spacing: -0.52px;
  cursor: pointer;
  white-space: nowrap;
  text-align: left;

  .sorting-icon {
    margin-left: 5px;
  }
}
</style>
