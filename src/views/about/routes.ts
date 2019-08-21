export default {
  path: '/about',
  component: {
    template: '<router-view />',
  },
  children: [
    {
      path: '',
      name: 'about',
      component: () => import('./about.vue'),
    },
  ],
}
