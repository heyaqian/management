import {createStore,applyMiddleware} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
//q store 是同步的，引用这个插件实现异步数据。
var store = createStore(reducer,applyMiddleware(thunk))
export default store;