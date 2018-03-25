
import {ADD_NUM,REDUCE_NUM,SAY} from './const'
export default {
    addNum(){
        return {
            type:ADD_NUM
        }
    },
    reduceNum(){
        return {
            type:REDUCE_NUM
        }
    },
    say(){
        return (dispatch)=>{
            setTimeout(()=>{
                alert('我爱你')
                let action={
                    type:SAY
                }
                dispatch(action)
            },3000)
        }
    }
}