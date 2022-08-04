import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import axios from 'axios';
import VueCompositionApi from '@vue/composition-api';

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.use(VueCompositionApi);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
