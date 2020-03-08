export default {
    allmark(){
        return{
            type:"ALLMARK"
        }
    },
    markById(id){
        return(dispatch)=>{
            dispatch({//q dispatch：View 发出 Action 的唯一方法。抛发动作
                type:'START'
            })
            setTimeout(()=>{
                dispatch({
                    type:'ALLMARKBYID',
                    id
                })
                dispatch({
                    type:"FINISH"
                })
            },1500)
        }
    }
}