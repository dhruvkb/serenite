import Vue from 'vue'
import Vuex from 'vuex'

import VuexPersistence from 'vuex-persist'

import todo from '@/store/modules/todo'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  key: 'serenite',
  storage: window.localStorage
})

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    todo
  },
  plugins: [
    vuexLocal.plugin
  ]
})
