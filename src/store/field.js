import FieldService from '@/services/FieldService';

const fieldService = new FieldService();

export const namespaced = true;

export const state = {
  operations: [],
};

export const getters = {
  OPERATIONS: s => s.operations,
};

export const actions = {
  async getOperations({ commit }) {
    const operations = await fieldService.getOperations();
    commit('SET_OPERATIONS', operations);
  },
};

export const mutations = {
  SET_OPERATIONS(s, payload) {
    s.operations = payload;
  },
};
