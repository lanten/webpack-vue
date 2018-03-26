import Vue from 'vue'

import App from './App.vue'
import JsxTest from './JsxTest'

new Vue({ render: h => <JsxTest /> }).$mount(document.body)

// require('./native-web-component')