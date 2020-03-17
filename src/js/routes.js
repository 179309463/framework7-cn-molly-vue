import HomePage from '@/pages/Home.vue';
import AdminPage from '@/pages/Admin.vue';
import CreateEmployeePopup from '@/pages/CreateEmployee.vue';
import CreateServicesPopup from '@/pages/CreateServices.vue';
import EditServicesPopup from '@/pages/EditServices.vue';
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

  // Employeers
  {
    path: '/create-employee',
    popup: {
      component: CreateEmployeePopup
    }
  },

  // Services
  {
    path: '/create-services',
    popup: {
      component: CreateServicesPopup
    }
  },
  {
    path: '/edit-services/:id',
    popup: {
      component: EditServicesPopup
    }
  },

  {
    path: '(.*)',
    component: NotFoundPage
  }
];

export default routes;
