import path from 'path'
import chalk from 'chalk'
import { prompt } from 'inquirer'
import vConsolePlugin from 'vconsole-webpack-plugin'

import webpackConfig from './webpack.config'
import buildCommon from './build-common'
import devConfig from '../config/dev.config'

const { BUILD_ENV, NODE_ENV } = process.env

console.log(NODE_ENV, BUILD_ENV)

if (BUILD_ENV) {
  buildDist(BUILD_ENV)
} else {
  const envList = Object.keys(devConfig.env)
  prompt({
    type: 'list',
    name: 'env',
    message: '\n\n选择编译到哪个环境?',
    choices: envList,
    default: envList[0],
  }).then(res => buildDist(res.env))
}

function buildDist(env) {
  if (env != 'prod') {
    // 测试环境启用 vConsole
    webpackConfig.plugins.push(new vConsolePlugin({ enable: true }))
    console.log('=> VConsole 已启用')
  }

  buildCommon({ env, webpackConfig }).then(envConfig => {
    console.log(chalk.greenBright('=> 构建完成!'))
  })
}
