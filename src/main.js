import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes} from './routes'
import {store} from './store/store'
import Vuetify from './plugins/vuetify';
import Notify from 'vue2-notify'
import dotenv from 'dotenv'

dotenv.config()
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Notify)
const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  store,
  Notify,
  Vuetify,
  router,
  render: h => h(App),
  created() {
    this.$store.dispatch('initialState')
  }
}).$mount('#app')
