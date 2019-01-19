
import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

new Vue({
  el: '#root',
  router,
  store,
  render: h => <App />
})
