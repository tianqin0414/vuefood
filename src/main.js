import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vant/lib/icon/local.css';
import './assets/scss/global.scss';

Vue.config.productionTip = false

import {Icon,} from  'vant'

Vue.use(Icon);

new Vue({
    router,
  store,
  render: h => h(App)
}).$mount('#app')
