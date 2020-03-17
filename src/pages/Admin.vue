<template>
  <f7-page :page-content="false">
    <f7-navbar title="Управление" large back-link="Назад"></f7-navbar>

    <f7-page-content v-if="loading">
      <f7-block class="loader">
        <f7-preloader color="black"></f7-preloader>
      </f7-block>
    </f7-page-content>

    <f7-page-content v-else>
      <!-- Сотрудники -->
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
          <f7-icon
            slot="media"
            f7="person_crop_square_fill"
            size="35"
          ></f7-icon>
        </f7-list-item>
      </f7-list>

      <!-- Услуги -->
      <f7-block-title class="title-with-actions">
        Услуги

        <f7-link
          href="/create-services"
          icon-f7="plus_circle_fill"
          icon-size="23"
        ></f7-link>
      </f7-block-title>

      <f7-list media-list>
        <f7-list-item
          v-if="services.manicure.length"
          divider
          title="Маникюр"
        ></f7-list-item>

        <f7-list-item
          v-for="service in services.manicure"
          :key="service.id"
          :title="service.title"
          :subtitle="
            `Цена: ${service.coast} ${
              service.maxCoast ? `- ${service.maxCoast}` : ''
            } ${service.currency}`
          "
          :link="`/edit-services/${service.id}`"
          :route-props="{ category: 'manicure' }"
        >
        </f7-list-item>

        <f7-list-item
          v-if="services.pedicure.length"
          divider
          title="Педикюр"
        ></f7-list-item>

        <f7-list-item
          v-for="service in services.pedicure"
          :key="service.id"
          :title="service.title"
          :subtitle="
            `Цена: ${service.coast} ${
              service.maxCoast ? `- ${service.maxCoast}` : ''
            } ${service.currency}`
          "
          :link="`/edit-services/${service.id}`"
          :route-props="{ category: 'pedicure' }"
        >
        </f7-list-item>
      </f7-list>
    </f7-page-content>
  </f7-page>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'Admin',

  data() {
    return {
      loading: true
    };
  },

  computed: {
    ...mapState({
      services: state => state.services.services
    })
  },

  created() {
    this.getServices().then(() => (this.loading = false));
  },

  methods: {
    ...mapActions({
      getServices: 'services/getServices'
    })
  }
};
</script>
