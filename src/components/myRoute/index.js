import {Route,Redirect} from 'react-router-dom';
import React, { Component } from 'react'

export default class myRoute extends Component {
    render() {
        let {path,component:Com,roles,key} = this.props;
        var permission = roles.some((item)=>item===sessionStorage.getItem('username'));
        return (
            <div>
                <Route path={path} key={key} render={(props)=>{
                    return permission?<Com {...props} />:<div>无权访问</div>
                }} />
            </div>
        )
    }
}

