import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
// import list from './modules/list';
import task from './modules/task';
import { saveLogin, loginOut, TOKEN } from '@/util/session';
import { getCookie } from '@/util/cookie';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  strict: debug,
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
    task,
    user
    // list,
    // filter,
  },
});
