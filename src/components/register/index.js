import React, { Component } from 'react'
import { Form, Icon, Input, Button ,Card} from 'antd';
import {reg} from '@/api/request.js'
@Form.create()
 class Register extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            reg(values.username,values.password).then((res)=>{
                // console.log(res)
                if(res.status===-1){
                    alert('用户已存在')
                }else if(res.status===0){
                    alert('注册成功')
                }
            })
          }
        });
      };
    
      render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Card title="注册" bordered={false} className="loginclass">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Register
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;Or<a href="/login">&nbsp;&nbsp;&nbsp;&nbsp;login now! </a>
            </Form.Item>
          </Form>
          </Card>
        );
      }
}
export default Register