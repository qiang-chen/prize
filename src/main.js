/**
 * @description 
 * @author cq
 * @Date 2020-09-22 11:15:28
 * @LastEditTime 2020-09-22 11:24:55
 * @LastEditors cq
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import LuckDraw from 'vue-luck-draw'

Vue.config.productionTip = false
Vue.use(LuckDraw)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
