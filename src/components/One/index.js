import React, { Component } from 'react'
import Hoc from '../Hoc'
@Hoc(22)

class One extends Component {
    componentDidMount(){
      fetch("/api/topics").then((res)=>res.json()).then((res)=>{
          console.log(res)
      })
    }
    render() {
        return (
            <div>
                one
            </div>
        )
    }
}
export default One