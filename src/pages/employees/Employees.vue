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
      <f7-list-item divider title="Владелец(ы)"></f7-list-item>
      <f7-list-item
        v-for="owner in owners"
        :key="owner.id"
        :title="owner.name ? `${owner.lastName} ${owner.name}` : 'Не заполнено'"
        :subtitle="owner.email"
        :badge="owner.isActive ? 'Активен' : 'Неактивен'"
        :badge-color="owner.isActive ? 'green' : 'gray'"
        :swipeout="!!owner.phoneNumber"
        :link="`/edit-employee/${owner.id}/`"
      >
        <f7-swipeout-actions right>
          <f7-swipeout-button v-if="owner.phoneNumber" color="green">
            <f7-icon f7="phone_fill"></f7-icon>
          </f7-swipeout-button>
        </f7-swipeout-actions>
      </f7-list-item>

      <f7-list-item divider title="Директор(а)"></f7-list-item>
      <f7-list-item
        v-for="director in directors"
        :key="director.id"
        :title="
          director.name
            ? `${director.lastName} ${director.name}`
            : 'Не заполнено'
        "
        :subtitle="director.email"
        :badge="director.isActive ? 'Активен' : 'Неактивен'"
        :badge-color="director.isActive ? 'green' : 'gray'"
        :swipeout="!!director.phoneNumber"
        :link="`/edit-employee/${director.id}/`"
      >
        <f7-swipeout-actions right>
          <f7-swipeout-button color="green">
            <f7-icon f7="phone_fill"></f7-icon>
          </f7-swipeout-button>
        </f7-swipeout-actions>
      </f7-list-item>

      <f7-list-item divider title="Администратор(ы)"></f7-list-item>
      <f7-list-item
        v-for="admin in administrators"
        :key="admin.id"
        :title="admin.name ? `${admin.lastName} ${admin.name}` : 'Не заполнено'"
        :subtitle="admin.email"
        :badge="admin.isActive ? 'Активен' : 'Неактивен'"
        :badge-color="admin.isActive ? 'green' : 'gray'"
        :swipeout="!!admin.phoneNumber"
        :link="`/edit-employee/${admin.id}/`"
      >
        <f7-swipeout-actions right>
          <f7-swipeout-button color="green">
            <f7-icon f7="phone_fill"></f7-icon>
          </f7-swipeout-button>
        </f7-swipeout-actions>
      </f7-list-item>

      <f7-list-item divider title="Мастер(а)"></f7-list-item>
      <f7-list-item
        v-for="master in masters"
        :key="master.id"
        :title="
          master.name ? `${master.lastName} ${master.name}` : 'Не заполнено'
        "
        :subtitle="master.email"
        :badge="master.isActive ? 'Активен' : 'Неактивен'"
        :badge-color="master.isActive ? 'green' : 'gray'"
        :swipeout="!!master.phoneNumber"
        :link="`/edit-employee/${master.id}/`"
      >
        <f7-swipeout-actions right>
          <f7-swipeout-button color="green">
            <f7-icon f7="phone_fill"></f7-icon>
          </f7-swipeout-button>
        </f7-swipeout-actions>
      </f7-list-item>

      <f7-list-item divider title="Стажер(ы)"></f7-list-item>
      <f7-list-item
        v-for="trainee in trainees"
        :key="trainee.id"
        :title="
          trainee.name ? `${trainee.lastName} ${trainee.name}` : 'Не заполнено'
        "
        :subtitle="trainee.email"
        :badge="trainee.isActive ? 'Активен' : 'Неактивен'"
        :badge-color="trainee.isActive ? 'green' : 'gray'"
        :swipeout="!!trainee.phoneNumber"
        :link="`/edit-employee/${trainee.id}/`"
      >
        <f7-swipeout-actions right>
          <f7-swipeout-button color="green">
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
    ...mapState('employees', {
      owners: state =>
        state.employees.filter(employee => employee.position === 'owner'),
      directors: state =>
        state.employees.filter(employee => employee.position === 'director'),
      administrators: state =>
        state.employees.filter(
          employee => employee.position === 'administrator'
        ),
      masters: state =>
        state.employees.filter(employee => employee.position === 'master'),
      trainees: state =>
        state.employees.filter(employee => employee.position === 'trainee')
    })
  },

  created() {
    this.$store
      .dispatch('employees/getEmployees')
      .then(() => (this.loading = false));
  }
};
</script>
