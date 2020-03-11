<template>
  <f7-popup id="popup-create-employee" swipe-to-close push>
    <f7-view class="color-theme-black">
      <f7-page>
        <f7-navbar title="Создание Сотрудника">
          <f7-nav-right>
            <f7-link popup-close="#popup-create-employee" icon-f7=""></f7-link>
          </f7-nav-right>
        </f7-navbar>

        <f7-block-title>
          Данные для входа
        </f7-block-title>
        <f7-list form>
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

          <f7-block>
            <f7-button fill large type="submit" @click.prevent="create">
              Создать
            </f7-button>
          </f7-block>
        </f7-list>

        <f7-block-title class="title-with-actions">
          Уровни доступа

          <f7-link
            href="/create-employee"
            icon-f7="ellipsis_circle_fill"
            icon-size="23"
          ></f7-link>
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
      </f7-page>
    </f7-view>
  </f7-popup>
</template>

<script>
export default {
  name: 'CreateEmployee',

  data() {
    return {
      permissions: [
        {
          name: 'canCreateEmployeers',
          title: 'Создание Сотрудников',
          value: false
        },
        {
          name: 'canEditEmployeers',
          title: 'Редактирование Сотрудников',
          value: false
        }
      ],
      email: { value: '', error: '' },
      password: { value: '', error: '' }
    };
  },

  methods: {
    create() {
      console.log('CREATE');
    }
  }
};
</script>
