import path from 'path'
import express from 'express'
import chalk from 'chalk'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import httpProxyMiddleware from 'http-proxy-middleware'

import webpackConfig from './webpack.config'
import config from '../config/dev.config'

webpackConfig.devtool = 'source-map'

// 热加载
const hotClient = ['webpack-hot-middleware/client?noInfo=true&reload=true']
if (typeof webpackConfig.entry == 'object') {
  Object.keys(webpackConfig.entry).forEach((name) => {
    const value = webpackConfig.entry[name]
    if (Array.isArray(value)) {
      value.unshift(...hotClient)
    } else {
      webpackConfig.entry[name] = [...hotClient, value]
    }
  })
} else {
  webpackConfig.entry = [...hotClient, webpackConfig.entry]
}

const webpackCompiler = webpack(webpackConfig)

const devMiddleware = webpackDevMiddleware(webpackCompiler, {
  // serverSideRender: true,
  publicPath: webpackCompiler.options.output.publicPath,
  noInfo: true,
  quiet: false,
  stats: {
    colors: true,
    hash: false,
    version: false,
    timings: false, // 时间信息
    assets: true, // 资源信息
    builtAt: true, // 构建日期和构建时间信息
    chunks: false,
    children: false,
    modules: false,
  }
})

const hotMiddleware = webpackHotMiddleware(webpackCompiler, { log: false })

const app = express()

app.use(devMiddleware)
app.use(hotMiddleware)

app.get('*/*', ({ url }, res, next) => {

  const hasExt = url.lastIndexOf(".")
  // const ext = url.substring(hasExt)

  if (hasExt > 0) return next()

  // const htmlFile = devMiddleware.fileSystem.readFileSync('./index.html', 'utf-8')
  const htmlFile = devMiddleware.fileSystem.readFileSync(path.join(webpackConfig.output.path, 'index.html'))

  console.log('=> 重定向', url)
  res.writeHeader(200, { 'Content-Type': 'text/html' })
  res.end(htmlFile)
})

// if (config.proxy) {
//   if (config.proxy.constructor == Array) {
//     config.proxy.forEach((val, index) => {
//       const type = val.type
//       delete val.type
//       app.use(httpProxyMiddleware(type, val))
//       console.log(`\n代理地址列表[${index + 1}]：${val.target}`)
//     })
//   } else {
//     const type = config.proxy.type
//     delete config.proxy.type
//     app.use(httpProxyMiddleware(type, config.proxy))
//     console.log(`\n代理地址：${config.proxy.target}`)
//   }
// }

// app.use(httpProxyMiddleware('**/*.rest', {
//   target: 'http://fe.iwjw.com:8888/api/fete_api/eJWuGZ/LPI0jW/mock'
// }))


app.listen(config.port, function () {
  process.stdout.clearLine()
  process.stdout.cursorTo(0)
  console.log(`dev-server at ${chalk.magenta.underline(`http://127.0.0.1:${this.address().port}`)}`)
})