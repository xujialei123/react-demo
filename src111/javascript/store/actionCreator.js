import {ADD_NUM,REDUCE_NUM} from './const'
import dispatcher from './dispatcher'
const actionCreator ={
    addNum(num){
        //产生一个action，并提交给dispatcher
        let action={
            type:ADD_NUM,
            num 
        }
        dispatcher.dispatch(action)

    },
    reduce(){
        let action={
            type:REDUCE_NUM
        }
        dispatcher.dispatch(action)
    }
}
export default actionCreator