<template>
  <f7-page>
    <f7-navbar title="Управление" large back-link></f7-navbar>

    <f7-block-title class="title-with-actions">
      Сотрудники

      <f7-link
        href="/create-employee"
        icon-f7="plus_circle_fill"
        icon-size="23"
      ></f7-link>
    </f7-block-title>
    <f7-list media-list>
      <f7-list-item
        link="#"
        header="Топ шапка"
        title="Заголовок"
        subtitle="Подзаголовок"
      >
        <f7-icon slot="media" f7="person_crop_square_fill" size="35"></f7-icon>
      </f7-list-item>
    </f7-list>

    <!-- <f7-actions convertToPopover ref="actionCreateEmployee">
      <f7-actions-group>
        <f7-actions-label>Выбери тип сотрудника</f7-actions-label>
        <f7-actions-button>Мастер</f7-actions-button>
        <f7-actions-button>Администратор</f7-actions-button>
      </f7-actions-group>
      <f7-actions-group>
        <f7-actions-button color="red">Отмена</f7-actions-button>
      </f7-actions-group>
    </f7-actions> -->
  </f7-page>
</template>

<script>
export default {
  name: 'Admin'
};
</script>
