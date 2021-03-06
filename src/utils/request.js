import axios from 'axios'

const service = axios.create({
    baseURL: 'https://book.youbaobao.xyz:18082',
    timeout: 5000
})

// 对拦截器进行封装
service.interceptors.response.use(
    // 正常的处理
    (response) => {
        if (response.status === 200 && response.data) {
            return response.data
        } else {
            return Promise.reject(new Error('请求失败'))
        }
    },
    // 异常的处理
    (error) => {
        return Promise.reject(error)
    }
)

export default service
