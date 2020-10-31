import Vue from 'vue'

import store from '@/store'

import App from '@/override/App.vue'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('div#app')
