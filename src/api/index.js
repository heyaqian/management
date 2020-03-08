import axios from 'axios';

var service = axios.create({
    baseURL:'/hd',//所有的请求都会 带上 /api,这个是自己配置的setupProxy
    "content-type":'application/json',
    timeout:4000
})
// //请求拦截器
service.interceptors.request.use((config)=>{
    if(sessionStorage.getItem("token")){
        config.headers["token"]=sessionStorage.getItem("token");
    }
    console.log("发请求了 带上token ")
    //q 请求List页面时会发送请求。
    return config;
})
// //响应拦截器
service.interceptors.response.use((res)=>{
    console.log(res)
    if(res.data.status===-1){
        window.location.href='/login'
    }
    return res.data
})

export default service;