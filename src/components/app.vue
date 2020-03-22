<template>
  <f7-app :params="f7params">
    <f7-view main class="safe-areas" url="/loading/"></f7-view>
    <login-screen></login-screen>
  </f7-app>
</template>

<script>
import routes from '@/js/routes.js';
import { APP_NAME, THEME } from '@/js/const/index.js';

import LoginScreen from '@/components/LoginScreen.vue';

export default {
  name: 'App',

  components: {
    LoginScreen
  },

  data() {
    return {
      f7params: {
        name: APP_NAME,
        theme: THEME,
        routes,
        dialog: {
          buttonOk: 'Да',
          buttonCancel: 'Отмена'
        },
        serviceWorker: {
          path: '/service-worker.js'
        }
      }
    };
  }
};
</script>
