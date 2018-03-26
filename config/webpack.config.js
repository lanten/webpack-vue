const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')

const { clearDir } = require('./utils')

// 获取环境变量
const { NODE_ENV } = process.env

const config = {
  target: 'web',
  mode: `${NODE_ENV}`,
  entry: {
    common: path.join(__dirname, '../app/index.js')
  },

  output: {
    filename: '[name]-[hash].js',
    path: path.join(__dirname, '../dist')
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        include: path.join(__dirname, '../app'),
        loader: 'vue-loader'
      },
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, '../app'),
        loader: 'babel-loader'
      },
      {
        test: /\.(sass|scss)$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${NODE_ENV}"`
      }
    }),
    new HtmlPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../app/index.html')
    })
  ],

  optimization: {}
}

if (NODE_ENV === 'development') {
  // 开发环境配置
  config.devtool = 'cheap-module-eval-source-map' // source-map 定位代码行号
  config.devServer = {
    port: 7899,
    host: '0.0.0.0',
    hot: true,
    clientLogLevel: 'none',
    historyApiFallback: true,
    overlay: {
      errors: true
    }
  }

  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
} else if (NODE_ENV == 'production') {
  // 生产环境配置

  clearDir(path.join(__dirname, '../dist'))

  // config.optimization.runtimeChunk = true
  config.optimization.splitChunks = {
    chunks: 'all',
    minSize: 0,
    maxAsyncRequests: Infinity,
    maxInitialRequests: Infinity,
    cacheGroups: {
      common: {
        chunks: 'async',
        minChunks: 2,
        priority: 10,
        reuseExistingChunk: true
      }
    }
  }
}

module.exports = config
