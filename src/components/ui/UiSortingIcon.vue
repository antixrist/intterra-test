<template>
  <svg
    class="ui-sorting-icon"
    :class="{
      'is-ascending': direction === 'asc',
      'is-descending': direction === 'desc',
    }"
    width="10"
    height="5"
    viewBox="0 0 10 5"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0L5 5L0 0H10Z" />
  </svg>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      validator: direction => ['asc', 'desc'].includes(direction),
    },
  },
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/vars';

.ui-sorting-icon {
  display: inline-block;
  vertical-align: middle;

  color: $color-gray-2;

  &.is-ascending,
  &.is-descending {
    color: $color-link;
  }
  &.is-ascending {
    transform: rotate(180deg);
  }
  &.is-descending {
    // by default
  }
}
</style>
