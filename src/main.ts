import Vue from 'vue'
import App from './views/App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
const init = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
