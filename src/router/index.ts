import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login.vue';
import Task from '@/views/Task.vue';
import Home from '@/views/Home.vue';
import PublicRefund from '@/views/PublicRefund.vue';
import PublicFree from '@/views/PublicFree.vue';
import listRefund from '@/views/ListRefund.vue';
import listFree from '@/views/ListFree.vue';
import listrefunddetail from '@/views/ListRefundDetail.vue';
import listfreedetail from '@/views/ListFreeDetail.vue';
import returnmoney from '@/views/ReturnMoney.vue';
import redpackage from '@/views/RedPackage.vue';
import User from '@/views/User.vue';
import tips from '@/views/Tips.vue';
import master from '@/views/Master.vue';
import { hasLogin, saveLogin } from '@/util/session';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: { title: '登陆' }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { title: '我的主页', requiredAuth: true }
    },
    {
      path: '/returnmoney',
      name: 'returnmoney',
      component: returnmoney,
      meta: { title: '批量微信支付返款', requiredAuth: true }
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      meta: { title: '个人中心', requiredAuth: true }
    },
    {
      path: '/publicrefund',
      name: 'publicrefund',
      component: PublicRefund,
      meta: { title: '挖宝活动发布', requiredAuth: true }
    },
    {
      path: '/publicfree',
      name: 'publicfree',
      component: PublicFree,
      meta: { title: '免单活动发布', requiredAuth: true }
    },
    {
      path: '/listrefund',
      name: 'listrefund',
      component: listRefund,
      meta: { title: '挖宝活动列表', requiredAuth: true }
    },
    {
      path: '/listrefunddetail',
      name: 'listrefunddetail',
      component: listrefunddetail,
      meta: { title: '挖宝详情列表', requiredAuth: true }
    },
    {
      path: '/listfreedetail',
      name: 'listfreedetail',
      component: listfreedetail,
      meta: { title: '免单详情列表', requiredAuth: true }
    },
    {
      path: '/listfree',
      name: 'listfree',
      component: listFree,
      meta: { title: '免单活动列表', requiredAuth: true }
    },
    {
      path: '/task',
      name: 'task',
      component: Task,
      meta: { requiredAuth: true, title: '活动测试' }
    },
    {
      path: '/master',
      name: 'master',
      component: master,
      meta: { requiredAuth: true, title: '超级管理员' }
    },
    {
      path: '/redpackage',
      name: 'redpackage',
      component: redpackage,
      meta: { requiredAuth: true, title: '红包返现明细' }
    },
    {
      path: '/tips',
      name: 'tips',
      component: tips,
      meta: { requiredAuth: true }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiredAuth)) {
    if (!hasLogin()) {
      window.location.href = '/';
    } else {
      next(); // 确保一定要调用 next()
    }
  } else {
    next(); // 确保一定要调用 next()
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
