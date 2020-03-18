// Main Screens
import HomePage from '@/pages/Home.vue';
import AdminPage from '@/pages/Admin.vue';

// Employees
import CreateEmployeePopup from '@/pages/employees/CreateEmployee.vue';

// Services
import CreateServicesPopup from '@/pages/services/CreateServices.vue';
import EditServicesPopup from '@/pages/services/EditServices.vue';

// Fallback
import NotFoundPage from '@/pages/404.vue';

var routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/admin/',
    component: AdminPage
  },

  {
    path: '/create-employee/',
    popup: {
      component: CreateEmployeePopup
    }
  },

  {
    path: '/create-services/',
    popup: {
      component: CreateServicesPopup
    }
  },
  {
    path: '/edit-services/:id/',
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
