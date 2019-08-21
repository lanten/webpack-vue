export default {
  path: '/',
  component: {
    template: '<router-view />',
  },
  children: [
    {
      path: '',
      name: 'home',
      component: () => import('./home.vue'),
    },
  ],
}
