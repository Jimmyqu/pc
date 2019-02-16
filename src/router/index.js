import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/askStatement',
      name: 'askStatement',
      component: resolve => require(['../components/page/askStatement/index.vue'], resolve),
    },
    {
      path: '/ask',
      name: 'ask',
      component: resolve => require(['../components/page/askPage/index.vue'], resolve),
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../components/page/login/index.vue'], resolve),
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
