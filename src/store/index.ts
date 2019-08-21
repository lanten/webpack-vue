import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const modulesSource = require.context('./modules', true, /\.ts$/)
const modules = {}
modulesSource.keys().forEach(item => {
  const key = $app.toCamel(item.replace(/^\.\/(.*)\.ts$/, '$1'))
  modules[key] = modulesSource(item).default
})

export default new Vuex.Store({
  modules,
  state: {},
  mutations: {},
  actions: {},
})
