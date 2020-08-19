<template>
  <div class="operations">
    <table class="operations__table">
      <thead class="heading">
        <tr>
          <ColumnHead
            class="column-head"
            sortable
            :direction="getFieldDirection('datetime')"
            @click.native="sortBy('datetime')"
          >
            Дата
          </ColumnHead>
          <ColumnHead
            class="column-head"
            sortable
            :direction="getFieldDirection('type')"
            @click.native="sortBy('type')"
          >
            Операция
          </ColumnHead>
          <!--<ColumnHead class="column-head">
            Культура
          </ColumnHead>-->
          <ColumnHead
            class="column-head"
            sortable
            :direction="getFieldDirection('assessment')"
            @click.native="sortBy('assessment')"
          >
            Качество
          </ColumnHead>
          <ColumnHead
            class="column-head"
            sortable
            :direction="getFieldDirection('area')"
            @click.native="sortBy('area')"
          >
            Площадь, га
          </ColumnHead>
        </tr>
      </thead>
      <tbody>
        <Operation v-for="operation in operations" :key="operation.id" :operation="operation" />
      </tbody>
    </table>
  </div>
</template>

<script>
import Sorter from '@/utils/Sorter';
import ColumnHead from './ColumnHead.vue';
import Operation from './Operation/index.vue';

export default {
  components: {
    ColumnHead,
    Operation,
  },
  props: {
    operations: {
      type: Array,
      required: true,
    },
    sorting: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    sorting: {
      immediate: true,
      handler() {
        this.sorter = Sorter.fromStruct(this.sorting);
      },
    },
  },
  methods: {
    sortBy(field) {
      this.$emit('sort', field);
    },
    getFieldDirection(name) {
      return this.sorter.getFieldDirection(name);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/vars';

.operations {
  &__table {
    width: 100%;
    border: none;
    border-collapse: collapse;
  }

  ::v-deep {
    th,
    td {
      padding: 12px 8px;
      border-bottom: 1px solid $color-gray-1;
    }
  }

  .heading {
    height: 40px;
    background: $color-gray-1;
  }
}
</style>
