import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import DateDropdown from 'vue-date-dropdown'

Vue.config.productionTip = false
Vue.component('date-dropdown', DateDropdown)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  value: null
}).$mount('#app')
