import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/** Imports */
require('@/plugins/bootstrap-vue');
require('@/plugins/firebase');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')