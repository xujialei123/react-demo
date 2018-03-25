import _state from'./state'
import {SET_BIGDATA,SET_GOODS} from './const'

let reducer = (state=_state,action)=>{
    let newState = Object.assign({},state)
    switch(action.type){
        case SET_BIGDATA:
        newState.bigdata=action.bigdata;break;
        case SET_GOODS:
        newState.goods=newState.goods.concat(action.goods);
        newState.total=action.total;
        break;
        default:break;
    }
    return newState
}
export default reducer