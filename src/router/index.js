import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['../components/page/login/index.vue'], resolve),
    },
    {
      path: '/city',
      name: 'city',
      component: resolve => require(['../components/page/city/index.vue'], resolve),
    },
    {
      path: '/province',
      name: 'province',
      component: resolve => require(['../components/page/province/index.vue'], resolve),
    },
    {
      path: '/daily',
      name: 'daily',
      component: resolve => require(['../components/page/daily/index.vue'], resolve),
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../components/page/login/index.vue'], resolve),
    },{
      path: '/Reply',
      name: 'Reply',
      component: resolve => require(['../components/page/Reply/index.vue'], resolve),
    },
    {
      path: '/report',
      name: 'report',
      component: resolve => require(['../components/page/report/index.vue'], resolve),
    },
    {
      path: '/satisfied',
      name: 'satisfied',
      component: resolve => require(['../components/page/satisfied/index.vue'], resolve),
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
