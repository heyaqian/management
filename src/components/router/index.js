import NotFound from '../NotFound'
import List from '../list'
import Home from '../home'
import DashBoard from '../dashBoard'
import Setting from '../setting'
import Add from '../add'
import Login from '../login'
import Register from '../register'
import Notify from '../notify'

export const routes = [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/404',
        component:NotFound
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/register',
        component:Register
    }
]

export const subRoutes =[
    {
        path:'/home/dashboard',
        component:DashBoard
        ,
        roles:["a","abc"]
    },
    {
        path:'/home/list',
        component:List
        ,
        roles:["a","abc"]
    },
    {
        path:'/home/setting',
        component:Setting
        ,
        roles:["a"]
    },
    {
        path:'/home/add',
        component:Add
        ,
        roles:["a"]
    },
    {
        path:'/home/notify',
        component:Notify,
        roles:['a','abc']
    }
]