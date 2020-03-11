<template>
  <f7-panel class="color-theme-black" left cover>
    <f7-view links-view=".view-main">
      <f7-page>
        <f7-navbar title="Бггг" large></f7-navbar>
        <f7-list media-list>
          <f7-list-item link="/profile" title="Профиль" panel-close>
            <f7-icon slot="media" f7="person_crop_square_fill"></f7-icon>
          </f7-list-item>

          <f7-list-item link="/my-statistic" title="Моя Статистика" panel-close>
            <f7-icon slot="media" f7="graph_square_fill"></f7-icon>
          </f7-list-item>

          <f7-list-item link="/admin" title="Управление" panel-close>
            <f7-icon slot="media" f7="person_2_square_stack_fill"></f7-icon>
          </f7-list-item>
        </f7-list>
      </f7-page>
    </f7-view>
  </f7-panel>
</template>

<script>
export default {
  name: 'LeftPanel'
};
</script>
