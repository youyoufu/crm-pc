import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login.vue';
import Task from '@/views/Task.vue';
import Bind from '@/views/BindUser.vue';
import User from '@/views/User.vue';
import tasklist from '@/views/TaskList.vue';
import taskfree from '@/views/TaskFree.vue';
import taskbuy1 from '@/views/TaskBuy1.vue';
import taskbuy2 from '@/views/TaskBuy2.vue';
import taskbuy3 from '@/views/TaskBuy3.vue';
import taskfreelist from '@/views/TaskFreeList.vue';
import { hasLogin, saveLogin } from '@/util/session';
import { stringifPath } from '@/api/index';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: { title: '欢迎首次登陆' }
    },
    {
      path: '/bind',
      name: 'bind',
      component: Bind,
      meta: { title: '绑定商场账户' }
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      meta: { title: '个人中心' }
    },
    {
      path: '/tasklist',
      name: 'tasklist',
      component: tasklist,
      meta: { title: '免单任务列表' }
    },
    {
      path: '/taskfreelist',
      name: 'taskfreelist',
      component: taskfreelist,
      meta: { title: '挖宝任务列表' }
    },
    {
      path: '/taskfree',
      name: 'taskfree',
      component: taskfree,
      meta: { title: '免单任务' }
    },
    {
      path: '/taskbuy1',
      name: 'taskbuy1',
      component: taskbuy1,
      meta: { title: '任务第1步(共3步)' }
    },
    {
      path: '/taskbuy2',
      name: 'taskbuy2',
      component: taskbuy2,
      meta: { title: '任务第2步(共3步)' }
    },
    {
      path: '/taskbuy3',
      name: 'taskbuy3',
      component: taskbuy3,
      meta: { title: '任务第3步(共3步)' }
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
