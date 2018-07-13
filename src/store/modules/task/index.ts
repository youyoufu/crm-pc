import { ActionTree, ActionContext, GetterTree, MutationTree } from 'vuex';
import task from '@/api/task';
import { List } from './task';
import { RootState } from '../../rootstate';

const namespaced = true;

const state = () => ({
  products: []
});

const getters: GetterTree<List, RootState> = {};
const actions: ActionTree<List, RootState> = {
  getAllProducts({ commit, state }) {
    task.getProducts(({ products }: { products: List[] }) => {
    return  commit('setProducts', products);
    });
    // return task.getProducts().then(({ products }: { products: List[] }) => {
    //   commit('setProducts', products);
    // });
  }
};

const mutations: MutationTree<List> = {
  setProducts(state, products) {
    state.products = {...products};
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced
};
