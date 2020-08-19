<template>
  <tr class="operation">
    <td></td>
  </tr>
</template>

<script>
import Operation from '@/models/Operation';
import { format } from '@/utils/date';

export default {
  components: {},
  props: {
    operation: {
      type: Operation,
      required: true,
    },
  },
  data: () => ({}),
  computed: {
    date() {
      format(this.operation.date, 'i MMM u');
    },
  },
};
</script>

<style lang="scss" scoped>
.operations {
}
</style>
