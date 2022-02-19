import Vue from 'vue'
import App from './App.vue'

import { ApiClientPlugin } from './plugins/api-client.plugin'

Vue.config.productionTip = false

Vue.use(ApiClientPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
