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
          Должность
        </f7-block-title>

        <f7-list>
          <f7-list-item
            v-for="(pos, index) in positions"
            :key="index"
            :title="pos.title"
            :value="pos.name"
            :checked="pos.name === position.value"
            @change="
              $event.target.checked
                ? (position.value = $event.target.value)
                : (position.value = '')
            "
            checkbox
          ></f7-list-item>
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
import positions from '@/js/const/employeePositions.js';

export default {
  name: 'CreateEmployee',

  data() {
    return {
      email: { value: '', error: '' },
      password: { value: '', error: '' },
      position: { value: '', error: '' },
      positions
    };
  },

  methods: {
    validate() {
      const errors = {};
      const { email, password, position } = this;

      email.error = '';
      password.error = '';
      position.error = '';

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

      if (!position.value) {
        notify('Выберите должность нового работника!');
        errors.position = 'error';
      }

      if (isEmpty(errors)) {
        return true;
      }

      Object.keys(errors).forEach(error => {
        errors[error] = {
          error: errors[error]
        };
      });

      merge(this.email, errors.email);
      merge(this.password, errors.password);
      merge(this.position, errors.position);
    },

    handleCreateEmployee() {
      if (!this.validate()) {
        return;
      }

      const { email, password, position } = this;

      this.$f7.dialog.preloader(
        `Регистрация ${
          this.positions.find(pos => pos.name === position.value).title
        }...`
      );

      this.$store
        .dispatch('employees/createEmployee', {
          email: email.value,
          password: password.value,
          name: '',
          lastName: '',
          phoneNumber: '',
          position: position.value,
          isActive: false
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
