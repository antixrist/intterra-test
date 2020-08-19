<template>
  <div class="filters">
    <a class="filter" v-text="'Запланированные операции'" @click.prevent="setFilter(OPERATION_FILTERS.PLANNED)" />
    <a
      class="filter is-active"
      v-text="'Выполненные операции'"
      @click.prevent="setFilter(OPERATION_FILTERS.EXECUTED)"
    />
  </div>
</template>

<script>
import { OPERATION_FILTERS } from './consts';

export default {
  components: {},
  props: {
    value: String,
  },
  data: () => ({
    type: null,
  }),
  watch: {
    type() {
      this.$emit('change', this.type);
    },
  },
  methods: {
    setFilter(type) {
      if (this.type === type) {
        this.type = null;
      } else {
        this.type = type;
      }
    },
  },
  created() {
    this.OPERATION_FILTERS = OPERATION_FILTERS;
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/vars';

.filters {
  display: flex;
  align-items: center;

  .filter {
    text-transform: uppercase;
    font-size: 13px;
    line-height: 1;
    letter-spacing: -0.47px;

    &:not(:last-child) {
      margin-right: 18px;
    }

    &:not(.is-active) {
      color: $color-link;
      cursor: pointer;
    }

    &.is-active {
      pointer-events: none;
    }
  }
}
</style>
