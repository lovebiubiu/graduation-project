// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import $ from 'jquery'
import utils from './utils/util.js'
import config from './utils/config.js'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$imgUrl = 'F:/desgin/myproject/src/assets/'
// Vue.prototype.$host = 'http://10.89.118.105:8080/'
Vue.prototype.$host = 'http://localhost:7777/'
Vue.prototype.$util = utils
Vue.prototype.$config = config
/* eslint-disable no-new */
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
}),

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
