<template>
  <f7-app :params="f7params">
    <LeftPanel />
    <f7-view main class="safe-areas color-theme-black" url="/"></f7-view>
    <LoginScreen />
  </f7-app>
</template>

<script>
import routes from '@/js/routes.js';
import { APP_NAME, THEME } from '@/js/const/index.js';
// import { currentUser } from '@/js/firebaseConfig.js';

import LeftPanel from '@/components/LeftPanel.vue';
import LoginScreen from '@/components/LoginScreen.vue';

export default {
  name: 'App',

  components: {
    LeftPanel,
    LoginScreen
  },

  data() {
    return {
      f7params: {
        name: APP_NAME,
        theme: THEME,
        routes,
        serviceWorker: {
          path: '/service-worker.js'
        }
      }
    };
  },

  mounted() {
    // this.$f7ready(() => {
    //   auth.onAuthStateChanged(user => {
    //     if (user) {
    //       console.log(user, 'user');
    //     } else {
    //       this.$f7.loginScreen.open('#login-screen');
    //     }
    //   });
    // });
  }
};
</script>
