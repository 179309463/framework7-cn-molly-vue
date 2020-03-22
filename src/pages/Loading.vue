<template>
  <f7-page>
    <f7-block class="loader">
      <span class="loader-title">Загрузка...</span>
      <f7-preloader></f7-preloader>
    </f7-block>
  </f7-page>
</template>

<script>
import { auth } from '@/js/firebaseConfig.js';

export default {
  name: 'Loading',

  created() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.$store.commit('user/SET_USER_ID', user.uid);
        this.$f7.views.main.router.navigate('/', {
          clearPreviousHistory: true
        });
      } else {
        this.$f7.loginScreen.open('#login-screen');
      }
    });
  }
};
</script>
