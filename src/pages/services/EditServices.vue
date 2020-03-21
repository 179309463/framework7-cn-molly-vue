<template>
  <f7-popup id="popup-edit-services" swipe-to-close push>
    <f7-view>
      <f7-page>
        <f7-navbar>
          <f7-nav-left>
            <f7-link
              icon-f7="trash_circle_fill"
              @click="handleDeleteService"
            ></f7-link>
          </f7-nav-left>
          <f7-nav-title>Редактирование Услуги</f7-nav-title>
          <f7-nav-right>
            <f7-link popup-close="#popup-edit-services">Закрыть</f7-link>
          </f7-nav-right>
        </f7-navbar>

        <f7-list form>
          <f7-list-input
            type="text"
            name="title"
            placeholder="Название"
            :value="title.value"
            :error-message="title.error"
            :error-message-force="!!title.error"
            @input="title.value = $event.target.value"
          ></f7-list-input>

          <f7-list-item
            title="Категория"
            smart-select
            :smart-select-params="{
              openIn: 'sheet',
              sheetPush: true,
              closeOnSelect: true,
              sheetSwipeToClose: true,
              sheetCloseLinkText: 'Закрыть'
            }"
          >
            <select name="Категория" v-model="newCategory">
              <option value="manicure" selected>Маникюр</option>
              <option value="pedicure">Педикюр</option>
            </select>
          </f7-list-item>

          <f7-list-input
            type="text"
            name="coast"
            inputmode="tel"
            placeholder="Цена"
            info="руб"
            :value="coast.value"
            :error-message="coast.error"
            :error-message-force="!!coast.error"
            @input="coast.value = $event.target.value"
          ></f7-list-input>

          <f7-list-input
            type="text"
            name="maxCoast"
            inputmode="tel"
            placeholder="Максимальная Цена"
            info="руб"
            :value="maxCoast.value"
            :error-message="maxCoast.error"
            :error-message-force="!!maxCoast.error"
            @input="maxCoast.value = $event.target.value"
          ></f7-list-input>

          <f7-block>
            <f7-segmented>
              <f7-button
                fill
                large
                type="submit"
                @click.prevent="handleChangeService"
              >
                Изменить
              </f7-button>
            </f7-segmented>
          </f7-block>
        </f7-list>
      </f7-page>
    </f7-view>
  </f7-popup>
</template>

<script>
import { merge, isEmpty } from 'lodash';
import { mapActions } from 'vuex';
import notify from '@/js/helpers/notify.js';

export default {
  name: 'EditServices',

  props: {
    category: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      title: { value: '', error: '' },
      newCategory: this.category,
      coast: { value: '', error: '' },
      maxCoast: { value: '', error: '' }
    };
  },

  computed: {
    service() {
      return this.$store.state.services.services[this.category].find(
        service => service.id === this.$f7route.params.id
      );
    }
  },

  created() {
    const { title, coast, maxCoast } = this;

    title.value = this.service.title;
    coast.value = this.service.coast;
    maxCoast.value = this.service.maxCoast;
  },

  methods: {
    validate() {
      const errors = {};
      const { title, coast } = this;

      title.error = '';
      coast.error = '';

      if (!title.value) {
        errors.title = 'Обязательное поле';
      }

      if (!coast.value) {
        errors.password = 'Обязательное поле';
      }

      if (isEmpty(errors)) {
        return true;
      }

      Object.keys(errors).forEach(error => {
        errors[error] = {
          error: errors[error]
        };
      });

      merge(this.title, errors.title);
      merge(this.coast, errors.coast);
    },

    handleChangeService() {
      if (!this.validate()) {
        return;
      }

      const { title, newCategory, coast, maxCoast } = this;

      this.$f7.preloader.show();

      this.updateService({
        docId: this.$f7route.params.id,
        title: title.value,
        category: newCategory,
        coast: coast.value,
        maxCoast: maxCoast.value,
        currency: 'руб'
      })
        .then(() => {
          this.$f7.preloader.hide();
          notify('Данные об услуге успешно изменены!');
        })
        .catch(() => {
          this.$f7.preloader.hide();
        });
    },

    handleDeleteService() {
      this.$f7.dialog.confirm(
        'Вы уверены что хотите удалить данную услугу?',
        'Удаление Услуги',
        () => {
          this.deleteService({
            docId: this.$f7route.params.id,
            category: this.newCategory
          }).then(() => {
            this.$f7.popup.close('#popup-edit-services');
          });
        }
      );
    },

    ...mapActions('services', ['updateService', 'deleteService'])
  }
};
</script>
