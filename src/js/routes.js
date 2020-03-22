// Main Screens
import HomePage from '@/pages/Home.vue';
import LoadingPage from '@/pages/Loading.vue';
import ProfilePage from '@/pages/Profile.vue';
import AdminPage from '@/pages/Admin.vue';

// Employees
import CreateEmployeePopup from '@/pages/employees/CreateEmployee.vue';
import EditEmployeePopup from '@/pages/employees/EditEmployee.vue';

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
    path: '/loading/',
    component: LoadingPage
  },
  {
    path: '/admin/',
    component: AdminPage
  },
  {
    path: '/profile/',
    component: ProfilePage
  },

  {
    path: '/create-employee/',
    popup: {
      component: CreateEmployeePopup
    }
  },
  {
    path: '/edit-employee/:id/',
    popup: {
      component: EditEmployeePopup
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
