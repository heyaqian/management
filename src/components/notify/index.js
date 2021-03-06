import React, { Component } from 'react'
import { List, Avatar, Badge, Icon,Card, Button,Spin  } from 'antd';
import {connect} from 'react-redux'
import actionCreator from '@/store/actionCreator';

var mapState=(state)=>{
    return {
        list:state.list,
        length:state.list.filter((item)=>!item.read).length,
        loading:state.loading
    }
}
@connect(mapState,actionCreator)
 class Notify extends Component {
    render() {
        console.log(this.props);
        return (
            <div>        
                 <Spin spinning={this.props.loading}>
                <Card title="通知中心" bordered={false} extra={<Button disabled={!Boolean(this.props.length)} onClick={this.props.allmark}>设置为全部已读</Button>}>
                 <List
                    itemLayout="horizontal"
                    dataSource={this.props.list}
                    renderItem={item => (
                    <List.Item extra={<Button disabled={item.read} onClick={this.props.markById.bind(this,item.id)}>设置为已读</Button>}>
                        <List.Item.Meta
                        avatar={<Badge dot={!item.read}><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Badge>}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description="HeYaqian is a beautiful girl"
                        />
                    </List.Item>
                        )}
                />
                </Card>
                </Spin>    
            </div>
        )
    }
}
export default Notify