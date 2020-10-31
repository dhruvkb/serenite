import Vue from 'vue'

import store from '@/store'

import App from '@/options/App.vue'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('div#app')
