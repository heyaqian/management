import React, { Component } from 'react'
import {subRoutes} from '../router'
import {Redirect,Switch,withRouter} from 'react-router-dom'
import Admin from '../admin'
import MyRoute from '../myRoute'
@withRouter
class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
          visible:true
          //q 一开始必须要定义，否则由false一旦改为true就改不回来了。
        }
      }
  componentDidMount(){
    this.changeTitle(this.props.location.pathname)
    this.routeListen();
  }
  routeListen(){
    this.props.history.listen((location)=>{
      this.changeTitle(location.pathname);
    })
  }
  changeTitle(pathname){
    this.setState({
      visible:true
    }) //q 这里是为了把数据改回来，不然一直为false
    switch(pathname){
      case '/':;
      case '/home':document.title='主页';break;
      case '/login':document.title='倩倩请您登录';break;
      case '/register':document.title='倩倩给您注册中..';break;
      case '/home/list':document.title='queen';break;
      case '/home/dashboard':document.title='king';break;
      default:
        if(pathname.includes('/home')){
          document.title="h&h"
        }  else{
          //显示404页面时候，隐藏导航
          this.setState({
            visible:false
          })
        }
    }
  }
    render() {
        // console.log(this.props)
        return (
            <div>              
                <Admin>  
                    <Switch>               
                        {
                            subRoutes.map((item)=>{
                                return <MyRoute key={item.path} path={item.path} component={item.component}
                                roles={item.roles}
                                />
                            })
                        }
                    <Redirect from="/home" to="/home/dashboard" exact />   
            </Switch>       
            </Admin> 
            </div>           
        )
    }
}
export default Home