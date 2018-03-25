
import axios from 'axios'
import {SET_BIGDATA,SET_GOODS} from './const'
export default {
    getBigData(){
        return (dispatch)=>{
            axios.get('/mz/api/ad/list').then(res=>{
                // console.log(res.data.data)
           return dispatch({
               type:SET_BIGDATA,
               bigdata:res.data.data
           })
        }).catch(error=>{
            console.log(error)
        })
        }
    },
    // getGoods(){
    //          var page=0
    //         var num=20
    //         var total=0
    //     return (dispatch)=>{
           
          
    //    var timer= setInterval(()=>{
    //                 page=page+1
    //                 console.log(page)
                   
    //              axios.get('/mz/api/recommend/home',{params:{
    //            page:page,num
    //         }}).then(res=>{
               
    //             console.log(res)
    //             dispatch({
    //                 type:SET_GOODS,
    //                 goods:res.data.data.list,
    //                 total:res.data.data.total
                   
    //             })
    //             total=res.data.data.total
    //             console.log(total)
    //         })
    //          if(page*num>total){
    //             clearInterval(timer)
    //          }
           
    //         },1000)
           
    //     }
    // }
}