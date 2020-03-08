
const initialState = {
    loading:false,
    list:[
        {
            "id":1,
            title: 'news 1',
            read:false
          },
          {
            "id":2,
            title: 'news 2',
            read:true
          },
          {
            "id":3,
            title: 'news 3',
            read:false
          },
          {
            "id":4,
            title: 'news 4',
            read:true
          }
    ]   
}

export default (state = initialState, action) => {
    switch (action.type) {

    case "ALLMARK":
        var newState = JSON.parse(JSON.stringify(state));
        newState.list.forEach((item)=>{
            item.read=true;
        })
        return newState;
    case "ALLMARKBYID":
        var newState = JSON.parse(JSON.stringify(state));
        newState.list.forEach((item)=>{
            if(item.id===action.id){
                item.read=true;
            }
        })
        return newState;
        case "START":
            return {...state,loading:true};
        case 'FINISH':
            return {...state,loading:false}
    default:
        return state
    }
}
