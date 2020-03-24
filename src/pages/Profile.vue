<template>
  <f7-page>
    <f7-navbar
      title="Профиль"
      no-hairline
      large
      back-link="Главная"
    ></f7-navbar>

    <f7-list media inset>
      <f7-list-item title="Редактировать" link="/edit-profile/"></f7-list-item>
      <f7-list-item
        class="sign-out-link"
        title="Выйти"
        @click="signOut"
      ></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
import { auth } from '@/js/firebaseConfig.js';

export default {
  name: 'Profile',

  methods: {
    signOut() {
      this.$f7.dialog.confirm('Вы уверены что хотите выйти?', 'Выход', () => {
        auth.signOut().then(() => {
          this.$f7.loginScreen.open('#login-screen');

          this.$f7.views.main.router.navigate('/', {
            clearPreviousHistory: true
          });
        });
      });
    }
  }
};
</script>
