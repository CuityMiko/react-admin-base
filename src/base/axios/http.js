import axios from 'axios'
import { message } from 'antd';
// import store from '@/store'

// 创建axios实例
const service = axios.create({
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // 设置请求报文头
  // if (store.getters.token) {
  //   config.headers['sdbtoken'] = store.getters.token; // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  // }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => response,
  error => {
    console.log('err' + error) // for debug
    // 提示错误信息
    message.warn(error.message)
    return Promise.reject(error)
  }
)

export default service
