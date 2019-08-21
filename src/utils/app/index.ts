/*
 * @Date: 2019-05-17 17:48:04
 * 全局工具函数集,禁止包含业务逻辑,尽可能是没有副作用的纯函数
 */

import cookie from 'js-cookie'

export { default as systemInfo } from './systemInfo'

/**
 * 中划线转驼峰
 * @param {String} str
 * @param {Boolean} c 首字母是否大写
 */
export function toCamel(str: string, c?: boolean): string {
  let strH = str.replace(/([^-])(?:-+([^-]))/g, (_, $1, $2) => $1 + $2.toUpperCase())
  if (c) strH = strH.slice(0, 1).toUpperCase() + strH.slice(1)
  return strH
}

// 设置语言
export function setLanguage(lang: string) {
  cookie.set('language', lang)
}

// 格式化金额 千分符
export function transformThousandth(value: number | string, fixed: number = 2): string {
  const num = Number(value)
  if (isNaN(num)) return (0).toFixed(fixed)
  return num.toFixed(fixed).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
}

// 函数防抖
class Debounce {
  public TM: number = Date.now()
  debounce(callBack: Function, t: number) {
    this.TM = Date.now()
    setTimeout(() => {
      if (Date.now() - this.TM >= t) {
        callBack()
      }
    }, t)
  }
}
export const debounce = new Debounce().debounce
