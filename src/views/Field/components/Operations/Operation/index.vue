<template>
  <tr class="operation">
    <td class="operation__date" v-text="datetime" />
    <td class="operation__type" v-text="type" />
    <td class="operation__assessment">
      <AssessmentBadge :value="operation.assessment" />
    </td>
    <td class="operation__area" v-text="operation.area" />
  </tr>
</template>

<script>
import locales from '@/locales';
import Operation, { OperationType } from '@/models/Operation';
import { format } from '@/utils/date';
import AssessmentBadge from './AssessmentBadge.vue';

export default {
  components: {
    AssessmentBadge,
  },
  props: {
    operation: {
      type: Operation,
      required: true,
    },
  },
  data: () => ({}),
  computed: {
    locales: () => locales,

    datetime() {
      return format(this.operation.datetime, 'd MMM u').replace(/\./g, '');
    },

    type() {
      const { type: value } = this.operation;
      return locales[OperationType[value]];
    },
  },
};
</script>

<style lang="scss" scoped>
.operation {
  font-size: 13px;

  &__date,
  &__assessment {
    font-size: 11px;
    line-height: 13px;
    letter-spacing: -0.4px;
  }

  &__date {
    text-transform: uppercase;
    opacity: 0.8;
  }
}
</style>
