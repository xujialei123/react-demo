
import _state from './state'

import {
    SET_BIG_DATA,INCRE_GOODS_LIST,SET_DETAIL_DATA,CONTROL_CAR_DATA,SET_USERINFO
} from './const'

const reducer = (state = _state,action) => {

    let newState = Object.assign({},state)

    switch (action.type) {
        case SET_BIG_DATA:
            newState.bigdata = action.bigdata;break;
        case INCRE_GOODS_LIST:
            newState.goodsList.list = newState.goodsList.list.concat(action.list);
            newState.goodsList.total = action.total;
            break;
        case SET_DETAIL_DATA: 
            newState.detailData = {item:action.item,desc:action.desc} 
            break;
        case SET_USERINFO:
            newState.userInfo = action.userInfo
            break;
        case CONTROL_CAR_DATA:
            //判断是不是有这个商品,注意，真实项目中是没有的
            let car = newState.car

            let isHas = car.some((good,i)=>{
                if(good.id===action.params.id){
                    good.num += action.params.ctype?action.params.num:-action.params.num

                    if(good.num<=0){
                        car.splice(i,1)
                    }
                    return true
                }
            })

            if(!isHas){
                let {id,name,price,num} = action.params
                car.push({id,name,price,num})
            }

            newState.car = car.slice()   
            //同步一下本地存储，但是注意，真实项目中，后端数据库里的数据在actionCreator中发送请求的时候已经是最新的 了                   
            localStorage.car = JSON.stringify(newState.car)
            break;

        default:break;

    }

    return newState;
}

export default reducer