<template>
  <f7-tab :id="id" :tab-active="tabActive" class="page-content">
    <f7-block v-if="loading" class="loader">
      <f7-preloader color="black"></f7-preloader>
    </f7-block>

    <f7-block-title v-if="!loading" class="title-with-actions">
      Добавить сотрудника
      <f7-link
        href="/create-employee/"
        icon-f7="plus_circle"
        icon-size="23"
      ></f7-link>
    </f7-block-title>

    <f7-list v-if="!loading" media-list>
      <f7-list-item
        link="#"
        header="Топ шапка"
        title="Заголовок"
        subtitle="Подзаголовок"
      >
        <f7-icon
          slot="media"
          f7="person_crop_square_fill"
          color="blue"
          size="35"
        ></f7-icon>
      </f7-list-item>
    </f7-list>
  </f7-tab>
</template>

<script>
export default {
  name: 'Employees',

  props: {
    id: {
      type: String,
      required: true
    },

    tabActive: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      loading: true
    };
  },

  created() {
    this.$store
      .dispatch('employees/getEmployees')
      .then(() => (this.loading = false));
  }
};
</script>
