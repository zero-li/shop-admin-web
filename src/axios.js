import axios from "axios"
import {
    ElNotification
} from "element-plus"
import {
    useCookies
} from "@vueuse/integrations/useCookies"
import {
    type
} from "windicss/utils"

const service = axios.create({
    baseURL: "/api"
    // baseURL:"http://ceshi13.dishait.cn"
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 往header头自动添加token
    const cookie = useCookies()
    const token = cookie.get("admin-token")

    if (token) {
        config.headers["token"] = token
    }
    return config


}, function (error) {
    // 错误
    return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function (response) {

    return response.data.data


}, function (error) {
    // 错误

    ElNotification({
        message: error.response.data.msg || "请求失败",
        type: 'error',
        duration: 3000
    })

    return Promise.reject(error)
})

export default service