// MAIN
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// PLUGINS
import vClickOutside from 'v-click-outside'

// STYLES
import '@/assets/fonts/Inter/style.scss'

Vue.config.productionTip = false

Vue.use(vClickOutside)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
