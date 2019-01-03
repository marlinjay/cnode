// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import {routes} from  './router'
import 'element-ui/lib/theme-chalk/display.css';
import Mudle from './components/Mudle'


Vue.use(VueRouter);
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.axios = axios;


const router = new VueRouter({
	routes,
	mode:"history"
})
/* eslint-disable no-new */
Vue.component('app-mudle',Mudle) //全局注册通用模板
new Vue({
  el: '#app',
  router,
  render: h => h(App),
 // components: { App ,},
  template: '<App/>'
})
