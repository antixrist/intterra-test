<template>
  <div class="page-home">
    <h1>Операции на поле 112</h1>

    <pre>{{ operations }}</pre>

    <Operations :operations="operations" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Operations from './components/Operations/index.vue';

export default {
  name: 'Field',
  components: {
    Operations,
  },
  data: () => ({
    isLoading: false,
  }),
  computed: {
    ...mapGetters('field', {
      operations: 'OPERATIONS',
    }),
  },
  methods: {
    ...mapActions('field', ['getOperations']),
  },
  async created() {
    this.isLoading = true;

    try {
      await this.getOperations();
    } finally {
      this.isLoading = false;
    }
  },
};
</script>
