import axios from './index';

export const getList = (page ,pageSize)=>{ //分页的接口
    return axios.get('/pagelist',{params:{page,pageSize}})
}

export const add = (name,age,key)=>{
    return axios.post('/add',{name,age,key})
}

export const del = (id)=>{
    return axios.post('/del',{id})
}
export const login =(username,password)=>{
    return axios.post('/users/login',{username,password})
}

export const reg = (username,password)=>{
    return axios.post('/users/reg',{
        username,password
    })
}
export const quit = ()=>{
    return axios.post('/users/quit')
}
export const upload = (data)=>{
    return axios.post('/upload',data)
}
//  q data是上传的表单数据，FormData