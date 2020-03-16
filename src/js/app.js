import Vue from 'vue';
import Framework7 from './framework7-custom.js';
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';
import './firebaseConfig.js';
import store from '@/store/index.js';

import '@/css/framework7-custom.less';
import '@/css/icons.less';
import '@/css/app.less';

import App from '@/components/app.vue';

Framework7.use(Framework7Vue);

export default new Vue({
  el: '#app',
  render: h => h(App),
  store,
  components: {
    app: App
  }
});
