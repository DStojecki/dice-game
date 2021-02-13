import Vue from 'vue'
import App from './App.vue'
import router from './router/routes.js'
import store from './store/storage.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueAxios, axios)