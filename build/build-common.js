import path from 'path'
import webpack from 'webpack'
import chalk from 'chalk'

import webpackConfigLocal from './webpack.config'
import { dist, dist_dev, env as envConfig } from '../config/dev.config'

import { clearDir } from './utils'

function build({ env, dev, webpackConfig = webpackConfigLocal } = {}) {
  return new Promise((resolve, reject) => {

    if (dev) {
      clearDir(path.resolve(__dirname, '../', dist_dev), false, true)
      webpackConfig.output.path = path.join(__dirname, '../', dist_dev)
    } else {
      console.log(chalk.yellowBright('=> 清空 dist'))
      clearDir(path.resolve(__dirname, '../', dist), false, true)
    }

    // 更换 publicPath
    if (env) {
      const { publicPath } = envConfig[env]
      webpackConfig.output.publicPath = publicPath
    }

    webpack(webpackConfig, (err, stats) => {
      if (err) {
        throw err
      }

      process.stdout.write(
        stats.toString({
          colors: true,
          hash: false,
          version: true,
          timings: true,
          assets: true,
          chunks: false,
          children: false,
          modules: false,
        }) + '\n\n'
      )

      if (stats.hasErrors()) {
        reject(stats)
      } else {
        resolve(envConfig[env], stats)
      }

    })
  })

}

export default build
