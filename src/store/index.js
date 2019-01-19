import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'
Vue.use(Vuex)

const { NODE_ENV } = process.env

export default new Vuex.Store({
  modules,

  // 开发模式下启用严格模式
  strict: NODE_ENV === 'development',

  state: {
    count: 0,
  }, // state end

  mutations: {
    addCount(state, n = 1) {
      state.count += n
    },

    reduceCount(state, n = 1) {
      state.count -= n
    }
  }, // mutations end

  actions: {

  }, // actions end

})