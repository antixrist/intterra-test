<template>
  <div class="assessment-badge" :class="colorClass">
    <span class="icon" />
    <span class="label" v-text="label" />
  </div>
</template>

<script>
import locales from '@/locales';
import { Assessment } from '@/models/Operation';

export default {
  props: {
    value: Number,
  },
  data: () => ({}),
  computed: {
    colorClass() {
      switch (this.value) {
        case Assessment.EXCELLENT:
          return 'is-success';
        case Assessment.SATISFACTORILY:
          return 'is-warning';
        case Assessment.BADLY:
          return 'is-danger';
        default:
          return 'is-default';
      }
    },

    label() {
      const { value } = this;
      return locales[Assessment[value]] || locales.NOT_RATED;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/vars';

.assessment-badge {
  display: flex;
  align-items: center;

  .icon {
    width: 20px;
    height: 10px;
    border-radius: 5px;
    margin-right: 10px;
  }

  .label {
  }

  &.is-default {
    .icon {
      background: $color-gray-1;
    }
    .label {
      opacity: 0.3;
    }
  }

  &.is-success {
    .icon {
      background: $color-success;
    }
  }
  &.is-warning {
    .icon {
      background: $color-warning;
    }
  }
  &.is-danger {
    .icon {
      background: $color-danger;
    }
  }
}
</style>
