import React, { Component } from 'react'
import { Table, Button, message } from 'antd';
import { getList,del } from '@/api/request';
import { Card } from 'antd';
import { Modal} from 'antd';
import {Route,Redirect,Switch} from 'react-router-dom'
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    }
  };

export default class List extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
            pageSize:4,
            id:-1,
            dataSource:[],
            visible:false,
            loading:false,
            columns : [
                {
                  title: 'Name',
                  dataIndex: 'name',
                  key: 'name',
                  render: text => <a>{text}</a>,
                },
                {
                  title: 'Age',
                  dataIndex: 'age',
                  key: 'age',
                },
                {
                  "title":"操作",
                  dataIndex:"operate",
                  key:'operate',
                  render:(text,record)=>{                
                    return <button onClick={this.del.bind(this,record.key)}>删除</button>
                  }
                }         
              ]
        }
    }
    componentDidMount(){
        this.getData(1,this.state.pageSize)  //获取第一页的数据
    }
    del=(id)=>{
      this.setState({
          id,
          visible:true,       
        })

    }
    componentWillUnmount(){  //解决异步数据回来时,组件却卸载了
      //重写组件的setState方法，直接返回空
      this.setState = (state,callback)=>{
        return;
      };  
  }
    getData(page,pageSize){
        getList(page,pageSize).then((res)=>{
            console.log(res)
            var list= res.list.map((item)=>{
                return {
                     key: item._id,
                     name: item.name,
                     age: item.age                   
                }
            })
            this.setState({
                dataSource:list,
                count:res.count
            })
        })
    }
    getPageContent=(page,pageSize)=>{
        this.getData(page,pageSize);
    }
    goAdd=()=>{
      this.props.history.push('/home/add')
    }
    handleOk=()=>{
      this.setState({
        loading:true  
      },()=>{
        del(this.state.id).then((res)=>{
          if(res.status===0){
            message.success('删除成功')
            this.getData(1,this.state.count);
            console.log(this.state.loading)
          }
        }).finally(()=>{
          setTimeout(()=>{
            this.setState({
               visible:false,
               loading:false
             })
          },1500)
          console.log(this.state.loading)
        })
      })
    }
    handleCancel=()=>{
      this.setState({
        visible:false
      })
   }
    render() {
        let {dataSource,columns,count,pageSize,loading,visible}= this.state;
        return (
            <div>
              {sessionStorage.getItem("token")?
              <>
                <Card title="学生列表" bordered={false} style={{ width: 600 }} extra={<Button onClick={this.goAdd}>添加</Button>}>
              <Table rowSelection={rowSelection} columns={columns} dataSource={dataSource} pagination={{total:count,pageSize,onChange:this.getPageContent}}/>         
              </Card>
              <Modal
          title="确认"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          confirmLoading={loading}
        >
          <p>您确认要删除吗</p>
        </Modal>
        </>:<Redirect to="/login" />}
            </div>
        )
    }
}