import React from 'react'

var Hoc=(num)=>(Com)=>{
    return class extends React.Component{
        render(){
            if(num>5) {return <><Com {...this.props}/>$copy;2020</>}
            else{
                return <div>数量不足</div>
            }
        }
    }
}

export default Hoc;



