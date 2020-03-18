<template>
  <f7-page :page-content="false">
    <f7-navbar title="Управление" large back-link="Главная">
      <f7-subnavbar>
        <f7-segmented strong>
          <f7-button tab-link="#tab-employees" tab-link-active>
            Сотрудники
          </f7-button>
          <f7-button tab-link="#tab-services">
            Услуги
          </f7-button>
        </f7-segmented>
      </f7-subnavbar>
    </f7-navbar>

    <f7-tabs>
      <employees-tab id="tab-employees" tab-active />
      <services-tab id="tab-services" />
    </f7-tabs>

    <!-- <f7-page-content v-if="loading">
      <f7-block class="loader">
        <f7-preloader color="black"></f7-preloader>
      </f7-block>
    </f7-page-content> -->

    <!-- <f7-page-content v-else>
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

      <f7-block-title class="title-with-actions">
        Услуги
        <f7-link
          href="/create-services"
          icon-f7="plus_circle_fill"
          icon-size="23"
        ></f7-link>
      </f7-block-title>

      <f7-list media-list>
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
          :link="`/edit-services/${service.id}`"
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
          :link="`/edit-services/${service.id}`"
          :route-props="{ category: 'pedicure' }"
        >
        </f7-list-item>
      </f7-list>
    </f7-page-content> -->
  </f7-page>
</template>

<script>
import EmployeesTab from './employees/Employees.vue';
import ServicesTab from './services/Services.vue';

export default {
  name: 'Admin',

  components: {
    EmployeesTab,
    ServicesTab
  }
};
</script>
