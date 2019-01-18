import Vue from 'vue'
import Router from 'vue-router';
import routes from './views/routes'

const routers = new Router({
  base: '/',
  mode: 'history',
  routes: routes,
})

Vue.use(Router)

export default routers
