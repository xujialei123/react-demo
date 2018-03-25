import React, { Component } from 'react';


import axios from 'axios'
import{hashHistory,Link} from 'react-router'

class Items extends Component{
    constructor(props){
        super(props)
        this.state={
            goods:[],
            page:1,
            num:20,
            total:0
        }
         
    }
    getgoods(){
     let {page,num,total,goods}=this.state
        
                 axios.get('/mz/api/recommend/home',{params:{
               page:page,num:num
            }}).then(res=>{
               this.setState({
                   goods:goods.concat(res.data.data.list),
                   total:res.data.data.total,
                   page:page+1
               }) 
              
               if(page>(total/num)&&total!==0){         
                 
            clearInterval(this.timer)
            console.log(total)
           }
        
                })
              
            
    }
    toDetail(id){
        hashHistory.push({pathname:'/detail/'+id})
    }
    componentDidMount(){
        let {page,num,total,goods}=this.state
        this.timer=setInterval(()=>{
            console.log(this.state.page)
            
            this.getgoods()
           

        },2000)
         
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
  
    render(){
        let {goods,total}=this.state
        // console.log(goods.length)
            return (
            <div className='items'>
                <div className="item-box">
                   {
                        goods.map((good,i)=>{
                            return (
                     <div className="item" key={good.id} onClick={this.toDetail.bind(this,good.id)}>
                            
                                <div className="item-info">
                                    <img src={good.skuList[0].image} width="100%" alt=""/>
                                    <div className='name'>{good.masterName.slice(0,20)}</div>
                                    <div className="content">
                                        <span className="price">￥{(good.skuList[0].price/100).toFixed(2)}</span>
                                        <span className="number">已售：{good.skuList[0].salesCount}</span>
                                    </div>

                                </div>
                    </div>
                            )
                        })   
                   } 
                   
                </div>
            </div>
            )
    }
}
export default Items