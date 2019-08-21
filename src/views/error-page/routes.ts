export default [
  {
    path: '*',
    name: '404',
    component: () => import('./404.vue'),
  },

  {
    name: 'error-page',
    component: () => import('./error-page.vue'),
  },
]
