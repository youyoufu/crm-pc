import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/views/HelloWorld.vue'
import Test from '@/views/test.vue'
import Login from '@/views/Login.vue'
// import { hasLogin } from '@/util/session';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    }
  ],
});

router.beforeEach((to, from, next) => {
  // if (to.matched.some((record) => record.meta.requiredAuth)) {
  //   // this route requires auth, check if logged in
  //   // if not, redirect to login page.
  //   if (!hasLogin()) {
  //     next({
  //       path: '/',
  //       query: { redirect: to.fullPath },
  //     });
  //   } else {
  //     next();
  //   }
  // } else {
    next(); // 确保一定要调用 next()
  // }
});

export default router;

