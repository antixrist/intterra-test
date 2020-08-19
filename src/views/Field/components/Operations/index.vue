<template>
  <div class="operations">
    <Filters class="operations__filters" />

    <table>
      <tbody>
        <Operation v-for="operation in operations" :key="operation.id" :operation="operation" />
      </tbody>
    </table>
  </div>
</template>

<script>
import Filters from './Filters.vue';
import Operation from './Operation.vue';

export default {
  components: {
    Filters,
    Operation,
  },
  props: {
    operations: {
      type: Array,
      required: true,
    },
  },
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.operations {
}
</style>
