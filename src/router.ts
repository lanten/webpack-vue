/**
 * @Author: lanten
 * @Date: 2019-05-16 16:07:07
 * 子路由嵌套 自动载入所有 ./views 目录中的 routes.ts 文件
 * 如果 routes.ts 的内容是一个数组,数组成员将被加入到一级路由, name 属性可以省略,系统将自动生成
 */

import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'

const views = require.context('./views', true, /routes\.ts$/)
let routes: any = []
views.keys().map(path => {
  const conf = views(path).default
  if (Array.isArray(conf)) {
    const pathGroup = path.replace(/^\.\/(.+)\/routes\.ts$/, '$1')
    const pathGroupArray = pathGroup.split('/')
    routes = routes.concat(
      conf.map((v: RouteConfig) => {
        if (v.path) return v
        if (pathGroupArray[pathGroupArray.length - 1] === v.name) {
          v.path = `/${pathGroup}`
        } else {
          v.path = `/${pathGroup}/${v.name}`
        }
        return v
      })
    )
  } else {
    routes.push(conf)
  }
})
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
