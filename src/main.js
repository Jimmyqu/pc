// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './common/api/index'
import cookie from './common/api/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/css/coverEle.css'
Vue.config.productionTip = false

Vue.prototype.$ajax= api;  //挂载封装axios
Vue.prototype.$cookie= cookie;  //挂载封装cookie
Vue.use(ElementUI);


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
