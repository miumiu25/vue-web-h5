import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementUi from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
// import './assets/css/base.scss'
Vue.config.productionTip = false
// Vue.use(ElementUi)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
