import axios from 'axios'


export function request(config) {

  //1.创建axios实例
  const instance = axios.create({
    // baseURL: 'https://www.fastmock.site/mock/60ea83bebd2eb8147fe5b90cc5d72e93/sjwx',
    // baseURL: 'http://localhost:8080',


  })
  //2.axios的拦截器
  // 配置请求和响应拦截
  instance.interceptors.request.use(config => {
    // console.log('来到了request拦截success中');
    // 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画

    // 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面

    // 3.对请求的参数进行序列化(看服务器是否需要序列化)
    // config.data = qs.stringify(config.data)
    // console.log(config);

    // 4.等等
    return config
  }, err => {
    // console.log('来到了request拦截failure中');
    return err
  })
  //响应拦截
  instance.interceptors.response.use(response => {
    // console.log('来到了response拦截success中');
    return response.data
  }, err => {
    console.log('来到了response拦截failure中');
    console.log(err);
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误'
          break
        case 401:
          err.message = '未授权的访问'
          break
      }
    }
    return err
  })
  //3.发送真正的网络请求
  return instance(config)
}