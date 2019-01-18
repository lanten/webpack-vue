// You can add any javascript code here

module.exports = {
  'vue-template': (name) => {
    return {
      [`${name}.vue`]: [
        `<template>`,
        `  <div class="${name}">`,
        `    <p>${name} is created</p>`,
        `  </div>`,
        `</template>`,
        ``,
        `<script>`,
        `export default {`,
        `  name: '${name}',`,
        ``,
        `}`,
        `</script>`,
        ``,
        `<style lang="scss">`,
        `.${name} {`,
        `}`,
        `</style>`,
      ],
      [`index.js`]: [
        `export default {`,
        `  path: '${name}',`,
        `  component: {`,
        `    template: '<keep-alive><router-view></router-view></keep-alive>',`,
        `  },`,
        `  children: [`,
        `    {`,
        `      path: '',`,
        `      name: '${name}',`,
        `      component: () => import('./${name}.vue'),`,
        `    },`,
        `  ]`,
        `}`,
      ]
    }
  },

  'vue-jsx': (name) => {
    return {
      [`${name}.js`]: [
        `export default {`,
        `  render(h) {`,
        `    return (`,
        `      <div class="${name}">`,
        `        <p>${name} is created</p>`,
        `      </div>`,
        `    )`,
        `  }`,
        `}`,
      ],
      [`index.js`]: [
        `export default {`,
        `  path: '${name}',`,
        `  component: {`,
        `    render: h => <keep-alive><router-view /></keep-alive>`,
        `  },`,
        `  children: [`,
        `    {`,
        `      path: '',`,
        `      name: '${name}',`,
        `      component: () => import('./${name}.vue'),`,
        `    },`,
        `  ]`,
        `}`,
      ]
    }
  }
}