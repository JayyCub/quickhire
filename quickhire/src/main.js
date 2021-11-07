import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock_data.js'
import listings from './output.js'

Vue.config.productionTip = false

let data = {
  candidates: mock,
  listings: listings,
  dashList: [],
  userListings: [],
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
