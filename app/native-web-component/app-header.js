export default class AppHeader extends HTMLElement {

  constructor() {
    super(...arguments)

    // 创建虚拟 DOM 链接
    // 文档 :https://developer.mozilla.org/zh-CN/docs/web/web_components/%E5%BD%B1%E5%AD%90_dom
    const shadowEl = this.attachShadow({
      mode: 'open'
    })

    this.view = document.createElement('div')
    shadowEl.appendChild(this.view)
    console.log(shadowEl)
  }

  connectedCallback(){
    this.render()
  }

  render() {
    console.log('自定义元素加入页面')
    // this.view.innerHTML = 'test ok ! - ' + this.innerHTML
    this.view.innerHTML = 'test ok ! - '
  }

}