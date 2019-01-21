
import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'

Vue.mixin({
  beforeCreate() {
    this.$api = api
  }
})

new Vue({
  el: '#root',
  router,
  store,
  render: h => <App />
})
