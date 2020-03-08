import { Layout, Menu, Breadcrumb, Icon , Dropdown} from 'antd';
import React,{ Component } from 'react';
import {withRouter} from 'react-router-dom'
import {quit} from '@/api/request'
const { Header, Content, Footer, Sider } = Layout;
@withRouter

class Admin extends Component {
    state = {
        collapsed: false,
      };
      showMenu=()=>{
        return (
            <Menu>
              <Menu.Item onClick={this.go} key='/home/notify'>
                通知中心
              </Menu.Item>
              <Menu.Item onClick={this.go} key='/quit'>
                退出
              </Menu.Item>
              <Menu.Item onClick={this.go} key='/login'>
                登录
              </Menu.Item>
            </Menu>
        )
      }
    go=({ item, key, keyPath, domEvent })=>{
      console.log(key)
      if(key==='/quit'){
        quit().then((res)=>{
          if(res.status===0){
            sessionStorage.clear();
            this.props.history.push('/')
          }
        })
      }else{
        this.props.history.push(key)
      }
    }
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
render(){
    return (
          <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed} >
            <div>
                <h3 style={{color:"#FFF"}}>
                 学 生 管 理 系 统
                 </h3>
             </div>
           
              <Menu theme="dark" mode="inline"
              selectedKeys={this.props.location.pathname}
              defaultSelectedKeys={['3']}>
                <Menu.Item key="/home/setting" onClick={this.go}>
                <Icon type="setting" />
                  <span>设置</span>
                </Menu.Item>
                <Menu.Item key="/home/dashboard" onClick={this.go}>
                  <Icon type="dashboard" />
                  <span>仪表盘</span>
                </Menu.Item>
                <Menu.Item key="/home/list" onClick={this.go}>
                  <Icon type="unordered-list" />
                  <span>列表管理</span>
                </Menu.Item>
                <Menu.Item key="/quit" onClick={this.go}>
                  <Icon type="close-circle" />
                  <span>退出</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 ,display:'flex',"justifyContent":"space-between"}}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
                <div>
                  <Dropdown overlay={this.showMenu()}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{color:"#000"}}>
                Hover me <Icon type="down" />
              </a>
            </Dropdown>
            </div>,
              </Header>
              <Content
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  background: '#fff',
                  minHeight: 280,
                }}
              >
               {this.props.children}
              </Content>
            </Layout>
          </Layout>
 )
}
}
export default Admin