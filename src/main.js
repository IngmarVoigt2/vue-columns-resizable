import Vue from 'vue';
import App from './App.vue';
import VueColumnsResizable from './plugins/vue-columns-resizable';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);
Vue.use(VueColumnsResizable);

Vue.config.productionTip = false;

new Vue({
  vuetify: new Vuetify(),  
  render: h => h(App),
}).$mount('#app');
