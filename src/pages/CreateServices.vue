<template>
  <f7-popup id="popup-create-services" swipe-to-close push>
    <f7-view class="color-theme-black">
      <f7-page>
        <f7-navbar title="Создание Услуги">
          <f7-nav-right>
            <f7-link popup-close="#popup-create-services">Закрыть</f7-link>
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
              cssClass: 'color-theme-black',
              sheetCloseLinkText: 'Закрыть'
            }"
          >
            <select name="Категория" v-model="category">
              <option value="manicure" selected>Маникюр</option>
              <option value="pedicure">Педикюр</option>
            </select>
          </f7-list-item>

          <f7-list-input
            type="text"
            name="coast"
            inputmode="tel"
            placeholder="Цена"
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
            :value="maxCoast.value"
            :error-message="maxCoast.error"
            :error-message-force="!!maxCoast.error"
            @input="maxCoast.value = $event.target.value"
          ></f7-list-input>

          <f7-block>
            <f7-button fill large type="submit" @click.prevent="create">
              Создать
            </f7-button>
          </f7-block>
        </f7-list>
      </f7-page>
    </f7-view>
  </f7-popup>
</template>

<script>
import { merge, isEmpty } from 'lodash';
import { mapActions } from 'vuex';

export default {
  name: 'CreateServices',

  data() {
    return {
      title: { value: '', error: '' },
      category: 'manicure',
      coast: { value: '', error: '' },
      maxCoast: { value: '', error: '' }
    };
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

    create() {
      if (!this.validate()) {
        return;
      }

      const { title, category, coast, maxCoast } = this;

      this.createService({
        title: title.value,
        category,
        coast: +coast.value,
        maxCoast: +maxCoast.value
      }).then(docId => {
        console.log(docId, 'docId');
      });
    },

    ...mapActions({
      createService: 'services/createService'
    })
  }
};
</script>
