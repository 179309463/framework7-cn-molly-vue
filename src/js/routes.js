import HomePage from '@/pages/Home.vue';
import AdminPage from '@/pages/Admin.vue';
import CreateEmployeePopup from '@/pages/CreateEmployee.vue';
import NotFoundPage from '@/pages/404.vue';

var routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/admin',
    component: AdminPage
  },

  {
    path: '/create-employee',
    popup: {
      component: CreateEmployeePopup
    }
  },

  {
    path: '(.*)',
    component: NotFoundPage
  }
];

export default routes;
