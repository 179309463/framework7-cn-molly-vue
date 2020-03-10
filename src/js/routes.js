import Home from '@/pages/Home.vue';
import NotFoundPage from '@/pages/404.vue';

var routes = [
  {
    path: '/',
    component: Home
  },

  {
    path: '(.*)',
    component: NotFoundPage
  }
];

export default routes;
