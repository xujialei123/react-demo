

import axios from 'axios'

import {
    SET_BIG_DATA,INCRE_GOODS_LIST,SET_DETAIL_DATA,CONTROL_CAR_DATA,SET_USERINFO
} from './const'

export default {

    getBigData () {

        return (dispatch) => {
            axios.get('/mz/api/ad/list').then(res=>{
                // this.setState({banners:res.data.data.splice(8,5)})

                dispatch({type:SET_BIG_DATA,bigdata:res.data.data})
            })
        }

    },
    getGoods (pIndex=1,callback) {

        return (dispatch) => {
            let total = 0
            axios.get('/mz/api/recommend/home',{
                params:{page:pIndex,num:20}
            }).then(res=>{
                let list = res.data.data.list
                let total = res.data.data.total
                dispatch({type:INCRE_GOODS_LIST,list,total})
                callback()
            })
        }
    },
    getDetailData (id) {

        return (dispatch) => {
            let action = {type:SET_DETAIL_DATA}

            
            axios.get('/mz/api/item',{
                params:{id}
            }).then(res => {
                action.item = res.data.data
                axios.get('/mz/api/item/desc',{
                    params:{id}
                }).then(res => {
                   
                    action.desc = res.data.data.desc
                    dispatch(action)
                })
            })

            // dispatch()
        }

    },
    controlCarData (params) {
        //将用户要加入购物车的数据，存入数据库
        return (dispatch) => {
            setTimeout(() => {
                
                //真实项目中，根据后端返回的数据，去设置action
                //id,name,price,ctype,num
                console.log(params)
                dispatch({type:CONTROL_CAR_DATA,params})
    
            }, 100);
        }

    },
    login (username,password,callback) {
        return dispatch => {

            setTimeout(()=>{
                if(username==='123'&&password==='456'){
                    let userInfo = {username:'二狗子'}
                    dispatch({type:SET_USERINFO,userInfo})
                    callback(true)
                }else{
                    callback(false)
                }
            },500)

        }
    }


}