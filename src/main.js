import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementUi from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUi)

//VueAwesomeSwiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);

// 数据请求
import http from './http'
//加载到vue原型上面
Vue.prototype.$http = http;

// import './assets/css/base.scss';

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
