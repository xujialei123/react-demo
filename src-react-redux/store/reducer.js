import _state from './state'
import {ADD_NUM,REDUCE_NUM,SAY} from './const'
const reducer = (state=_state,action)=>{
    let new_state=Object.assign({},state)
    switch(action.type){
        case ADD_NUM:
        new_state.num++;break;
        case REDUCE_NUM:
        new_state.num--;break;
        case SAY :alert('我爱你');break;
        default:break;
    }
    return new_state
}
export default reducer

