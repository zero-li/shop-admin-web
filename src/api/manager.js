import axios from "~/axios"

// http://dishaxy.dishait.cn/shopadminapi
export function login(username, password){
    return axios.post("/admin/login",{
        username,
        password
    })
}