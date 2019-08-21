module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ['plugin:vue/essential', '@vue/prettier', '@vue/typescript'],

  rules: {
    'no-console': 'off', // 禁用 console
    'no-debugger': 'off', // 禁用 debugger
    'no-alert': 'off', // 禁用 alert

    indent: ['error', 2, { SwitchCase: 1 }], // 强制使用两个空格作为缩进
    quotes: ['error', 'single'], //强制使用单引号
    semi: ['error', 'never'], //强制不使用分号结尾
    'comma-dangle': ['error', 'always-multiline'], // 逗号结束
    'no-param-reassign': 'error', // 禁止对 function 的参数进行重新赋值
    'jsx-quotes': ['error', 'prefer-double'], // 强制所有 JSX 属性值使用双引号。
    'vue/attribute-hyphenation': 'error', // 属性使用中划线风格
    'vue/html-closing-bracket-newline': 'error', // 结束标签换行
    'vue/this-in-template': 'error', // template 中禁用 this
    'vue/html-closing-bracket-spacing': 'error', // 标签右括号空格
    'vue/v-bind-style': 'error', // v-bind 简洁风格
    'vue/v-on-style': 'error', // v-on 简洁风格
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
}
