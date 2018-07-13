import task from '@/api/task';
import { ActionTree, ActionContext, GetterTree, MutationTree } from 'vuex';

const state = {
  products: []
};

const getters = {};
// mutations
const mutations = {
  setProducts(state, products) {
    state.products = products;
  }
};
const actions = {
  getAllProducts({ commit }) {
    task.getProducts(products => {
      commit('setProducts', products);
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
