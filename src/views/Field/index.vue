<template>
  <div class="page-home">
    <h1>Операции на поле 112</h1>

    <Filters class="filters" :value="form.filter" @input="setFilter($event)" />

    <Operations class="operations" :operations="sortedOperations" :sorting="form.sort" @sort="refreshSorting($event)" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import unzip from 'lodash/unzip';
import orderBy from 'lodash/orderBy';
import Sorter from '@/utils/Sorter';
import Filters from './components/Filters.vue';
import Operations from './components/Operations/index.vue';
import { OPERATION_FILTERS } from './components/consts';

export default {
  name: 'Field',
  components: {
    Filters,
    Operations,
  },
  data: () => ({
    isLoading: false,
    form: {
      filter: OPERATION_FILTERS.EXECUTED,
      sort: null,
    },
  }),
  computed: {
    ...mapGetters('field', ['OPERATIONS']),

    operations() {
      return this.OPERATIONS.map(operation => {
        const { year, month, day } = operation.date;
        // eslint-disable-next-line no-param-reassign
        operation.datetime = new Date(year, month - 1, day);

        return operation;
      });
    },

    filteredOperations() {
      const now = Date.now();
      const { filter } = this.form;
      switch (filter) {
        case OPERATION_FILTERS.PLANNED:
          return this.operations.filter(operation => operation.datetime > now);
        case OPERATION_FILTERS.EXECUTED:
          return this.operations.filter(operation => operation.datetime <= now);
        default:
          return this.operations;
      }
    },

    sortedOperations() {
      const operations = this.filteredOperations.map(operation => {
        const { year, month, day } = operation.date;
        // eslint-disable-next-line no-param-reassign
        operation.datetime = new Date(year, month - 1, day);

        return operation;
      });

      return orderBy(operations, ...unzip(this.form.sort));
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        const defaultForm = this.$options.data().form;
        const { filter, sort } = this.$route.query;

        this.sorter = Sorter.fromString(sort);
        this.form = {
          filter: filter || defaultForm.filter,
          sort: this.sorter.toStruct(),
        };
      },
    },
  },
  methods: {
    ...mapActions('field', ['getOperations']),

    setFilter(filter) {
      this.$router.push({
        query: {
          ...this.$route.query,
          filter: filter || undefined,
        },
      });
    },

    refreshSorting(field) {
      this.sorter.toggle(field);
      this.$router.push({
        query: {
          ...this.$route.query,
          sort: this.sorter.toString() || undefined,
        },
      });
    },
  },
  async created() {
    this.isLoading = true;
    try {
      await this.getOperations();
    } catch (err) {
      // handle error
      console.error(err);
    } finally {
      this.isLoading = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.page-home {
  > * {
    margin: 0;

    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
}
</style>
