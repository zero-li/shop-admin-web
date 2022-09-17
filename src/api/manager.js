import axios from "~/axios"

// http://dishaxy.dishait.cn/shopadminapi
export function login(username, password){
    return axios.post("/admin/login",{
        username,
        password
    })
}


export function getMockInfo(){
    return axios.get("/api/getRoleById?id=1")
}

export function getInfo(){
    return axios.post("/admin/getinfo")
}


export function logout(){
    return axios.post("/admin/logout")
}


export function updatePassword(data){
    return axios.post("/admin/updatepassword",data)
}