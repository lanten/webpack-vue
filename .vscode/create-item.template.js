// You can add any javascript code here

module.exports = {
  // template 页面单元
  'vue-ts': (name) => {
    return {
      [`${name}.vue`]: tempItem(name),
      [`index.ts`]: indexItem(name)
    }
  },

  // template 页面单元, 包含子路由
  'vue-ts-router': (name) => {
    return {
      [`${name}.vue`]: tempItem(name),
      [`routes.ts`]: routerItem(name, '.vue')
    }
  },

  // vue tsx 页面单元
  'vue-tsx': (name) => {
    return {
      [`${name}.tsx`]: tsxItem(name),
      [`index.ts`]: indexItem(name)
    }
  },

  // vue tsx 页面单元, 包含子路由
  'vue-tsx-router': (name) => {
    return {
      [`${name}.tsx`]: tsxItem(name),
      [`routes.ts`]: routerItem(name, '')
    }
  },
}

/**
 * 中划线转驼峰
 * @param {String} str 
 * @param {Boolean} c 首字母大写
 */
function toCamel(str, c = true) {
  let strH = str.replace(/([^\-])(?:\-+([^\-]))/g, (_, $1, $2) => $1 + $2.toUpperCase())
  if (c) strH = strH.slice(0, 1).toUpperCase() + strH.slice(1)
  return strH
}

/**
 * template 基础单元
 * @param {String} name 
 */
function tempItem(name) {
  const nameH = toCamel(name)
  return [
    `<template>`,
    `  <div class="${name}">`,
    `    <p>${name} is created</p>`,
    `  </div>`,
    `</template>`,
    ``,
    `<script lang="ts">`,
    `import { Component, Vue } from 'vue-property-decorator'`,
    ``,
    `@Component`,
    `export default class ${nameH} extends Vue {`,
    `  mounted() {`,
    `    console.log('${name} is mounted')`,
    `  }`,
    `}`,
    `</script>`,
    ``,
    `<style lang="less">`,
    `.${name} {`,
    `}`,
    `</style>`,
    ``,
  ]
}

/**
 * tsx 基础单元
 * @param {String} name 
 */
function tsxItem(name) {
  const nameH = toCamel(name)
  return [
    `import { Component, Vue } from 'vue-property-decorator'`,

    `@Component`,
    `export default class ${nameH} extends Vue {`,
    `  mounted() {`,
    `    console.log('${name} is mounted')`,
    `  }`,
    '',
    `  render() {`,
    `    return <div class="${name}">${name} is ok</div>`,
    `  }`,
    `}`,
    ``
  ]
}

/**
 * 子路由
 * @param {String} name 
 * @param {String} ext 
 */
function routerItem(name, ext = '.vue') {
  return [
    `export default {`,
    `  path: '/${name}',`,
    `  component: {`,
    `    template: '<router-view />',`,
    `  },`,
    `  children: [`,
    `    {`,
    `      path: '',`,
    `      name: '${name}',`,
    `      component: () => import('./${name}${ext}'),`,
    `    },`,
    `  ],`,
    `}`,
    ``,
  ]
}

/**
 * index 文件中转
 * @param {String} name 
 */
function indexItem(name) {
  const nameH = toCamel(name)
  return [
    `import ${nameH} from './${name}.vue'`,
    `export default ${nameH}`,
    ``,
  ]
}