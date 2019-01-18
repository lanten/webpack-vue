export default {
  path: '/demo',
  component: {
    // template: '<keep-alive><router-view></router-view></keep-alive>',
    render: h => <keep-alive><router-view /></keep-alive>
  },

  children: [
    {
      path: 'demo-1',
      name: 'demo-1',
      meta: { title: 'demo-1' },
      component: () => import('./Demo.vue'),
    },

    {
      path: 'demo-jsx',
      name: 'demo-jsx',
      meta: { title: 'demo-jsx' },
      component: () => import('./DemoJsx'),
    },
  ]
}
