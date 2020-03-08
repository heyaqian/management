import React, { Component } from 'react'
import { Upload } from 'antd';
import { upload } from '@/api/request'
export default class Setting extends Component {
    constructor(props){
        super(props);
        this.state = {
            img:''
        }
    }
    upload=({file})=>{
        var form = new FormData;
        form.append('file',file)
        upload(form).then((res)=>{
            if(res.status===0){
                this.setState({
                    img:"http://localhost:4000"+ res.path
                })
            }
            console.log(this.state.img)
        })
    }
    render() {
        return (
            <div>
               <Upload 
               style={{"height":100,"width":100,border:"1px dashed #ccc",display:"block"}}
                name="avatar"
                listType="picture-card"
                showUploadList={false}
                customRequest={this.upload}
                >
          {this.state.img?<img src={this.state.img} style={{"width":100}}/> : <div>上传</div>}
      </Upload>
            </div>
        )
    }
}
