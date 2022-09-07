import axios from "axios"

const service = axios.create({
    baseURL:"/api"
    // baseURL:"http://ceshi13.dishait.cn"
})

export default service