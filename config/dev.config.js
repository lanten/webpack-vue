const path = require('path')

module.exports = {
  source: 'src',
  dist: 'dist',
  dist_dev: 'dist-dev',
  template: 'src/index.html',
  publicPath: '/',
  port: 8087,

  entry: {
    // app: path.join('src/index.js'),
    app: path.join('src/main.ts'),
  },

  alias: {
    vue$: 'vue/dist/vue.common.js',
    '@': path.resolve(__dirname, '../'),
  },

  provide: {
    $app: 'src/utils/app',
    $const: 'src/utils/const',
  },

  proxy: [
    {
      type: '**/*.rest',
      target: 'http://fe.iwjw.com:8888/api/fete_api/eJWuGZ/LPI0jW/mock',
      logLevel: 'silent',
      changeOrigin: true,
    },
  ],

  env: {
    dev: {
      publicPath: '/',
    },
    test: {
      publicPath: '/',
    },
    prev: {
      publicPath: '/',
    },
    prod: {
      publicPath: '/',
    },
  },
}
