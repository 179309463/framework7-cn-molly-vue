<template>
  <f7-page>
    <f7-navbar title="Главная" no-hairline large></f7-navbar>

    <f7-list media-list inset>
      <f7-list-item link="/profile/" title="Профиль">
        <f7-icon
          slot="media"
          f7="person_crop_square_fill"
          color="blue"
        ></f7-icon>
      </f7-list-item>

      <f7-list-item link="/admin/" title="Управление">
        <f7-icon
          slot="media"
          f7="exclamationmark_square_fill"
          color="orange"
        ></f7-icon>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  name: 'Home',

  created() {
    this.$store.dispatch('user/getUserInfo');
  }
};
</script>
