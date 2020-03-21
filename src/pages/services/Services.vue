<template>
  <f7-tab
    :id="id"
    :tab-active="tabActive"
    @tab:show="tabShow"
    class="page-content"
  >
    <f7-block v-if="loading" class="loader">
      <f7-preloader color="black"></f7-preloader>
    </f7-block>

    <f7-block-title v-if="!loading" class="title-with-actions">
      Добавить услугу
      <f7-link
        href="/create-services/"
        icon-f7="plus_circle"
        icon-size="23"
      ></f7-link>
    </f7-block-title>

    <f7-list v-if="!loading" media-list>
      <f7-list-item divider title="Маникюр"></f7-list-item>

      <f7-list-item
        v-for="service in services.manicure"
        :key="service.id"
        :title="service.title"
        :subtitle="
          `Цена: ${service.coast} ${
            service.maxCoast ? `- ${service.maxCoast}` : ''
          } ${service.currency}`
        "
        :link="`/edit-services/${service.id}/`"
        :route-props="{ category: 'manicure' }"
      >
      </f7-list-item>

      <f7-list-item divider title="Педикюр"></f7-list-item>

      <f7-list-item
        v-for="service in services.pedicure"
        :key="service.id"
        :title="service.title"
        :subtitle="
          `Цена: ${service.coast} ${
            service.maxCoast ? `- ${service.maxCoast}` : ''
          } ${service.currency}`
        "
        :link="`/edit-services/${service.id}/`"
        :route-props="{ category: 'pedicure' }"
      >
      </f7-list-item>
    </f7-list>
  </f7-tab>
</template>

<script>
export default {
  name: 'Services',

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

  computed: {
    services() {
      return this.$store.state.services.services;
    }
  },

  methods: {
    tabShow() {
      this.$store
        .dispatch('services/getServices')
        .then(() => (this.loading = false));
    }
  }
};
</script>
