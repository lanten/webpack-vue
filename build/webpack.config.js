const path = require('path')
const webpack = require('webpack')

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const vConsolePlugin = require('vconsole-webpack-plugin')

const {
  source,
  dist,
  template,
  publicPath,
  alias,
  entry,
  provide,
} = require('../config/dev.config')

const appConfig = require('../config/app.config')

const { NODE_ENV } = process.env

const appPath = path.join(__dirname, `../${source}`)

const cssLoader = `css-hot-loader!${
  NODE_ENV == 'development' ? 'style-loader' : MiniCssExtractPlugin.loader
}!css-loader${NODE_ENV == 'production' ? '!postcss-loader' : ''}`

console.log(NODE_ENV, appPath)

process.env.BASE_URL = publicPath

const webpackConfig = {
  mode: NODE_ENV,
  target: 'web',
  entry,
  resolve: {
    extensions: ['.ts', '.jsx', '.js', '.jsx', '.vue', '.json'],
    modules: [process.cwd(), 'node_modules'],
    alias,
  },
  output: {
    publicPath,
    path: path.join(__dirname, '../', dist),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name]-[chunkhash:7].js',
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        include: appPath,
        loader: 'vue-loader',
      },
      {
        test: /\.js[x]?$/,
        include: appPath,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.(sass|scss)$/,
        loader: `${cssLoader}!sass-loader`,
      },
      {
        test: /\.less$/,
        loader: `${cssLoader}!less-loader`,
      },
      {
        test: /\.css$/,
        loader: cssLoader,
      },
      {
        test: /\.(png|jpe?g|gif|svg|swf|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          name: 'assets/[name].[hash:7].[ext]',
        },
      },
    ],
  },

  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      template: path.join('./', template),
      templateParameters: appConfig,
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: 'css/[name]-[chunkhash:7].css',
    }),
    new webpack.ProvidePlugin(provide),
  ],

  optimization: {
    // runtimeChunk: true,
    splitChunks: {
      name: 'common',
    },
  },
}

if (NODE_ENV == 'development') {
  // 开发环境配置
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
    // new vConsolePlugin({
    //   enable: true
    // }),
  )
} else if (NODE_ENV == 'production') {
  // 生产环境配置
  webpackConfig.plugins.push(
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          pure_funcs: ['console.log'], // 删除console.log, 保留 info ，warn，error 等
        },
      },
    })
  )
  webpackConfig.optimization.minimizer = [new OptimizeCSSAssetsPlugin()]
}

module.exports = webpackConfig
