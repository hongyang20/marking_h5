/**
 * Created by Administrator on 2018/9/25.
 */
import axios from 'axios'

// create an axios instance
const service = axios.create({ 
  baseURL: 'http://ht.qhjlhc.com/',

  timeout: 30000 // request timeout
})

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    return response
  },
  error => {
    return error.response;
  }
)
//请求服务器加上token令牌
service.interceptors.request.use(config => {
  // Do something before request is sent
  var arr, reg = new RegExp("(^| )" + 'access_token' + "=([^;]*)(;|$)");
  arr = document.cookie.match(reg)
    if(arr){
        config.headers['Authorization'] ="Bearer "+arr[2];
    }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})
//q
// respone interceptor
service.interceptors.response.use(
  response => response,

  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  })

export default service
