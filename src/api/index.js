import axios from '~/axios'

// 后台首页统计1
export function getStatistics1(){
    return axios.get("/admin/statistics1")
}