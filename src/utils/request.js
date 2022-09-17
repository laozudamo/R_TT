import axios from 'axios'
import store from '@/store'
import { message } from 'antd';
const info = (msg) => {
  message.error(msg);
};

// create an axios instance
const service = axios.create({
  baseURL: 'http://192.168.0.231:9001', // url = base url + request url
  timeout: 3000, // request timeout
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

// request interceptor
service.interceptors.request.use(config => {
  // Do something before request is sent
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['Token'] = token
  }
  return config;
},
  error => {

    // Do something with request error
    return Promise.reject(error);
    console.log('请求',error)
  });


// response interceptor
/* 
  1030 token失效
*/
service.interceptors.response.use(response => {
  const { code, msg } = response.data
  if (code !== 0) {
    info(msg)
    if (code === 1030) {
      store.user.resetToken()
      window.location.reload()
    }
  }

  return response.data
},
  error => {
    if(error.code === 'ECONNABORTED') {
      info('请求超时,请重试')
    }
    if(error.code === "ERR_NETWORK") {
      info('服务器不在线')
    }
    
    const { response } = error
    if (response && response.status === 500) {
      info('服务器内部错误')
    }
    
    return Promise.reject(error);
  }
)

export default service