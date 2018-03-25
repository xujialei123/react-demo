import {Dispatcher} from 'flux'
import {ADD_NUM,REDUCE_NUM} from './const'
import store from './index'
let dispatcher = new Dispatcher();
dispatcher.register(function(action){
    switch(action.type){
        case ADD_NUM:
        //调用store。方法
        store.addNum(action.num);break;
        case REDUCE_NUM:store.reduceNum();break
        default:break;
    }
})
export default dispatcher 