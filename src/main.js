import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import routes from './routes.js'
import store from "./store/Store";

Vue.config.productionTip = false

Vue.filter('currency', value => {
  return '$' + value.toLocaleString();
})

Vue.use(vueRouter);
const router = new vueRouter({
  mode: 'history',
  routes
})
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
