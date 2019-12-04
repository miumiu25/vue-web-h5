import axios from 'axios'
import Vue from 'vue'
import router from './router'
//1.创建axios实例
const http = axios.create({
  //baseURL:'http://localhost:3000/web/api'
})
//2.axios的拦截器
// 配置请求和响应拦截
http.interceptors.request.use(function (config) {
  // 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画

  // 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer ' + localStorage.token
  }
  // 3.对请求的参数进行序列化(看服务器是否需要序列化)
  // config.data = qs.stringify(config.data)
  // 4.等等
  return config;
}, function (error) {
  return Promise.reject(error)
})
  //响应拦截
http.interceptors.response.use(res => {
  return res
}, err => {
  if (err.response.data.message) {
    Vue.prototype.$message({
      type: 'error',
      message: err.response.data.message
    })
    if (err.response.status === 401) {
      router.push('/login')
    }
  }

  return Promise.reject(err)
})
export default http