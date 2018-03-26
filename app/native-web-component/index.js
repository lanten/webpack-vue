import AppHeader from './app-header'

// 注册组件
customElements.define('app-header',AppHeader)

const root = document.createElement('app-header')

root.innerHTML =  `
  <div>
  okk
  <h4>123</h4>
  </div>
`     

document.body.appendChild(root)