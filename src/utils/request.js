import axios from "axios";

const service = axios.create({
  baseURL: 'https://apis.imooc.com',
  timeout: 5000
})

// 对拦截器进行封装
service.interceptors.response.use(
  // 正常的处理
  response => {

  },
  // 异常的处理
  error => {
    return Promise.reject(error)
  }
)

export default service