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
        v-for="employee in employees.filter(employee => employee.id !== userId)"
        :key="employee.id"
        :title="
          employee.name
            ? `${employee.lastName} ${employee.name}`
            : 'Не заполнено'
        "
        :subtitle="employee.email"
        :badge="employee.isActive ? 'Активен' : 'Неактивен'"
        :badge-color="employee.isActive ? 'green' : 'gray'"
        :swipeout="!!employee.phoneNumber"
        :link="`/edit-employee/${employee.id}/`"
      >
        <f7-swipeout-actions right>
          <f7-swipeout-button v-if="employee.phoneNumber" color="green">
            <f7-icon f7="phone_fill"></f7-icon>
          </f7-swipeout-button>
        </f7-swipeout-actions>
      </f7-list-item>
    </f7-list>
  </f7-tab>
</template>

<script>
import { mapState } from 'vuex';

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

  computed: {
    ...mapState({
      userId: state => state.user.info.id,
      employees: state => state.employees.employees
    })
  },

  created() {
    this.$store
      .dispatch('employees/getEmployees')
      .then(() => (this.loading = false));
  }
};
</script>
