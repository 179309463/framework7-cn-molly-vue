<template>
  <f7-popup id="popup-create-employee" swipe-to-close push>
    <f7-view>
      <f7-page>
        <f7-navbar title="Создание Сотрудника">
          <f7-nav-right>
            <f7-link popup-close="#popup-create-employee">Закрыть</f7-link>
          </f7-nav-right>
        </f7-navbar>

        <f7-block-title>
          Данные для входа
        </f7-block-title>

        <f7-list>
          <f7-list-input
            type="text"
            name="username"
            placeholder="E-mail"
            :value="email.value"
            :error-message="email.error"
            :error-message-force="!!email.error"
            @input="email.value = $event.target.value"
          ></f7-list-input>
          <f7-list-input
            type="text"
            name="password"
            placeholder="Пароль"
            :value="password.value"
            :error-message="password.error"
            :error-message-force="!!password.error"
            @input="password.value = $event.target.value"
          ></f7-list-input>
        </f7-list>

        <f7-block-title class="title-with-actions">
          Разрешенные действия
          <f7-link icon-f7="ellipsis_circle" icon-size="23"></f7-link>
        </f7-block-title>

        <f7-list>
          <f7-list-item v-for="(permission, index) in permissions" :key="index">
            <span>{{ permission.title }}</span>
            <f7-toggle
              :checked="permission.value"
              @toggle:change="permission.value = !permission.value"
            ></f7-toggle>
          </f7-list-item>
        </f7-list>

        <f7-block>
          <f7-button
            fill
            large
            type="submit"
            @click.prevent="handleCreateEmployee"
          >
            Создать
          </f7-button>
        </f7-block>
      </f7-page>
    </f7-view>
  </f7-popup>
</template>

<script>
import { merge, isEmpty } from 'lodash';
import { db, auth, staffCollection } from '@/js/firebaseConfig.js';
import notify from '@/js/helpers/notify.js';
import validateEmail from '@/js/helpers/validateEmail.js';
import firebaseErrorToHumanError from '@/js/const/firebaseErrorToHumanError.js';
import permissions from '@/js/const/employeePermissions.js';

export default {
  name: 'CreateEmployee',

  data() {
    return {
      email: { value: '', error: '' },
      password: { value: '', error: '' },
      permissions
    };
  },

  methods: {
    validate() {
      const errors = {};
      const { email, password } = this;

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

      console.log(errors);

      merge(this.email, errors.email);
      merge(this.password, errors.password);
    },

    handleCreateEmployee() {
      if (!this.validate()) {
        return;
      }

      const { email, password } = this;
      const permissions = this.permissions.reduce((result, item) => {
        result[item['name']] = item['value'];
        return result;
      }, {});

      this.$f7.dialog.preloader('Регистрация сотрудника...');

      this.$store
        .dispatch('employees/createEmployee', {
          email: email.value,
          password: password.value,
          permissions
        })
        .then(() => {
          this.$f7.dialog.close();
          this.$f7.popup.close('#popup-create-employee');
        })
        .catch(error => {
          this.$f7.dialog.close();
          firebaseErrorToHumanError(error.code, message => {
            notify(message);
          });
        });
    }
  }
};
</script>
