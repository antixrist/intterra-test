import Vue from 'vue';
import Vuex from 'vuex';
import * as field from './field';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    field,
  },
});
