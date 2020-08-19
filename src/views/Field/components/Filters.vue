<template>
  <div class="filters">
    <UiRadio id="filter-planned" class="filter" v-model="localValue" :value="OPERATION_FILTERS.PLANNED">
      <template v-slot="{ checked }">
        <label for="filter-planned">
          <span class="label" :class="{ 'is-active': checked }">Запланированные операции</span>
        </label>
      </template>
    </UiRadio>

    <UiRadio id="filter-executed" class="filter" v-model="localValue" :value="OPERATION_FILTERS.EXECUTED">
      <template v-slot="{ checked }">
        <label for="filter-executed">
          <span class="label" :class="{ 'is-active': checked }">Выполненные операции</span>
        </label>
      </template>
    </UiRadio>
  </div>
</template>

<script>
import UiRadio from '@/components/ui/UiRadio.vue';
import { OPERATION_FILTERS } from './consts';

export default {
  components: {
    UiRadio,
  },
  props: {
    value: String,
  },
  data: () => ({
    type: null,
  }),
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
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
    &:not(:last-child) {
      margin-right: 20px;
    }
  }

  .label {
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
