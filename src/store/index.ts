import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';
import user1 from './modules/user1';
import { getCookie } from '@/util/cookie';
import { saveLogin, TOKEN } from '@/util/session';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: getCookie(TOKEN),
  },
  mutations: {
    saveToken(state, token) {
      state.token = token;
      saveLogin(token);
    },
  },
  modules: {
    user,
    user1
  }
});

export default store;
