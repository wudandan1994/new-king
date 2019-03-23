// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// 引入插件兼容Ie
import 'babel-polyfill'
// 引入公共css
import './assets/css/common.css'

import axios from 'axios'
Vue.prototype.$http = axios
// 允许跨域
axios.defaults.withCredentials = true
// 引入适配
import 'lib-flexible/flexible'

import { Button ,Tabbar,TabbarItem ,Icon ,NavBar,Swipe, SwipeItem } from 'vant'
Vue.use(Button)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Icon)
Vue.use(NavBar)
Vue.use(Swipe).use(SwipeItem)




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
