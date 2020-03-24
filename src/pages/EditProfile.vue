<template>
  <f7-page>
    <f7-navbar title="Редактирование профиля" back-link="Назад"></f7-navbar>

    <f7-list form>
      <f7-list-input
        type="text"
        name="name"
        placeholder="Имя"
        :value="name.value"
        :error-message="name.error"
        :error-message-force="!!name.error"
        @input="name.value = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        type="text"
        name="lastName"
        placeholder="Фамилия"
        :value="lastName.value"
        :error-message="lastName.error"
        :error-message-force="!!lastName.error"
        @input="lastName.value = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        type="tel"
        name="phoneNumber"
        placeholder="Номер телефона"
        info="Пример: +375291112233"
        :value="phoneNumber.value"
        :error-message="phoneNumber.error"
        :error-message-force="!!phoneNumber.error"
        @input="phoneNumber.value = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        type="text"
        name="email"
        placeholder="E-mail"
        disabled
        :value="email"
      ></f7-list-input>

      <f7-list-item>
        <span>Аккаунт активен</span>
        <f7-toggle
          :checked="isActive"
          @toggle:change="val => (isActive = val)"
        ></f7-toggle>
      </f7-list-item>

      <f7-list-item>
        <span>Показывать в форме заявки</span>
        <f7-toggle
          :checked="isShowInApplicationForm"
          @toggle:change="val => (isShowInApplicationForm = val)"
        ></f7-toggle>
      </f7-list-item>

      <f7-block>
        <f7-segmented>
          <f7-button fill large type="submit" @click.prevent="handleUpdateInfo">
            Изменить
          </f7-button>
        </f7-segmented>
      </f7-block>
    </f7-list>
  </f7-page>
</template>

<script>
import { merge, isEmpty } from 'lodash';
import { mapActions } from 'vuex';
import notify from '@/js/helpers/notify.js';

export default {
  name: 'EditProfile',

  data() {
    return {
      name: { value: '', error: '' },
      lastName: { value: '', error: '' },
      phoneNumber: { value: '', error: '' },
      email: '',
      isActive: false,
      isShowInApplicationForm: false
    };
  },

  computed: {
    info() {
      return this.$store.state.user.info;
    }
  },

  created() {
    const {
      name,
      lastName,
      phoneNumber,
      email,
      isActive,
      isShowInApplicationForm
    } = this.info;

    this.name.value = name;
    this.lastName.value = lastName;
    this.phoneNumber.value = phoneNumber;
    this.email = email;
    this.isActive = isActive;
    this.isShowInApplicationForm = isShowInApplicationForm;
  },

  methods: {
    validate() {
      const errors = {};
      const { name, lastName, phoneNumber } = this;

      name.error = '';
      lastName.error = '';
      phoneNumber.error = '';

      if (!name.value) {
        errors.name = 'Обязательное поле';
      }

      if (!lastName.value) {
        errors.lastName = 'Обязательное поле';
      }

      if (!phoneNumber.value) {
        errors.phoneNumber = 'Обязательное поле';
      }

      if (isEmpty(errors)) {
        return true;
      }

      Object.keys(errors).forEach(error => {
        errors[error] = {
          error: errors[error]
        };
      });

      merge(this.name, errors.name);
      merge(this.lastName, errors.lastName);
      merge(this.phoneNumber, errors.phoneNumber);
    },

    handleUpdateInfo() {
      const {
        info: { id },
        name,
        lastName,
        phoneNumber,
        email,
        isActive,
        isShowInApplicationForm
      } = this;

      this.$f7.preloader.show();

      this.$store
        .dispatch('user/updateUserInfo', {
          id,
          name: name.value,
          lastName: lastName.value,
          phoneNumber: phoneNumber.value,
          email,
          isActive,
          isShowInApplicationForm
        })
        .then(() => {
          this.$f7.preloader.hide();
          notify('Данные успешно изменены!');
        })
        .catch(() => {
          this.$f7.preloader.hide();
          notify('Не удалось изменить данные, попробуйте еще раз!');
        });
    }
  }
};
</script>
