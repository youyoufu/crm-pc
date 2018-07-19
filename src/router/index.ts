import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login.vue';
import Task from '@/views/Task.vue';
import Home from '@/views/Home.vue';
import PublicFree from '@/views/PublicFree.vue';
import User from '@/views/User.vue';
import { hasLogin, saveLogin } from '@/util/session';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: '我的主页' }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { title: '登陆' }
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      meta: { title: '个人中心' }
    },
    {
      path: '/publicfree',
      name: 'PublicFree',
      component: PublicFree,
      meta: { title: '免单任务发布' }
    },
    {
      path: '/task',
      name: 'task',
      component: Task,
      meta: { requiredAuth: true, title: '任务测试' }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiredAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to autologin.
    if (!hasLogin()) {
      saveLogin('youyoufu');
      // next({
      //   path: '/task',
      //   query: { redirect: to.fullPath },
      // });
    } else {
      /* 路由发生变化修改页面title */
      if (to.meta.title) {
        document.title = to.meta.title;
      }
      next();
    }
  } else {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
      document.title = to.meta.title;
    }
    next(); // 确保一定要调用 next()
  }
});

export default router;
