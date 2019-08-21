/*
 * @Date: 2019-05-17 18:17:01
 * TS 声明文件
 */

declare namespace $app {
  /**
   * 中划线转驼峰
   * @param {String} str
   * @param {Boolean} c 首字母是否大写
   */
  function toCamel(str: string, c?: boolean): string

  /**
   * 获取系统信息
   */
  const systemInfo: SystemInfo

  /**
   * 设置语言
   * @param lang ['zh','hk','en']
   */
  function setLanguage(lang: string): void

  /**
   * 千分符
   * @param value
   * @param fixed
   */
  function transformThousandth(value: number | string, fixed?: number): string

  /**
   * 函数防抖
   * @param callBack
   * @param t
   */
  function debounce(callBack: Function, t: number): void
}
