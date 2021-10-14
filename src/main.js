import Vue from 'vue'
import App from './App.vue'
import Chakra from '@chakra-ui/vue'
import router from './router'
import VueGoodTablePlugin from 'vue-good-table';

import 'vue-good-table/dist/vue-good-table.css'
import VueMobileDetection from 'vue-mobile-detection'

Vue.use(VueMobileDetection)
Vue.use(VueGoodTablePlugin);
Vue.use(Chakra)





Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
