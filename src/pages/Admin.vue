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
