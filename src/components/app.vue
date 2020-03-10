<template>
  <f7-app :params="f7params">
    <f7-panel class="color-theme-black" left cover theme-dark>
      <f7-view>
        <f7-page>
          123123
        </f7-page>
      </f7-view>
    </f7-panel>

    <f7-view main class="safe-areas color-theme-black" url="/"></f7-view>

    <f7-login-screen id="login-screen" class="color-theme-black">
      <f7-view>
        <f7-page login-screen>
          <f7-login-screen-title>Вход</f7-login-screen-title>
          <f7-list form>
            <f7-list-input
              type="text"
              name="username"
              placeholder="E-mail"
              :value="auth.email.value"
              :error-message="auth.email.error"
              :error-message-force="!!auth.email.error"
              @input="auth.email.value = $event.target.value"
            ></f7-list-input>
            <f7-list-input
              type="password"
              name="password"
              placeholder="Пароль"
              :value="auth.password.value"
              :error-message="auth.password.error"
              :error-message-force="!!auth.password.error"
              @input="auth.password.value = $event.target.value"
            ></f7-list-input>
          </f7-list>

          <f7-block>
            <f7-button fill large @click="login">Войти</f7-button>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-login-screen>
  </f7-app>
</template>

<script>
import routes from '@/js/routes.js';
import { merge, isEmpty } from 'lodash';
import { APP_NAME, THEME } from '@/js/const/index.js';
import { auth, currentUser } from '@/js/firebaseConfig.js';
import validateEmail from '@/js/helpers/validateEmail.js';

export default {
  data() {
    return {
      f7params: {
        name: APP_NAME,
        theme: THEME,
        routes,
        serviceWorker: {
          path: '/service-worker.js'
        }
      },

      auth: {
        email: { value: '', error: '' },
        password: { value: '', error: '' }
      }
    };
  },

  mounted() {
    this.$f7ready(() => {
      auth.onAuthStateChanged(user => {
        if (user) {
          console.log(user, 'user');
        } else {
          console.log('121');
        }
      });
    });
  },

  methods: {
    validate() {
      const errors = {};
      const { email, password } = this.auth;

      email.error = '';
      password.error = '';

      if (!validateEmail(email.value)) {
        errors.email = 'Неправильный формат эл. почты';
      }

      if (!email.value) {
        errors.email = 'Обязательное поле';
      }

      if (!password.value) {
        errors.password = 'Обязательное поле';
      }

      if (password.value.length < 6) {
        errors.password = 'Минимум 6 символов';
      }

      if (isEmpty(errors)) {
        return true;
      }

      Object.keys(errors).forEach(error => {
        errors[error] = {
          error: errors[error]
        };
      });

      merge(this.auth.email, errors.email);
      merge(this.auth.password, errors.password);
    },

    login() {
      if (!this.validate()) {
        return;
      }

      const { email, password } = this.auth;

      auth
        .createUserWithEmailAndPassword(email.value, password.value)
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
