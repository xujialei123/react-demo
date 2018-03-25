import React, { Component } from 'react';
import {connect} from 'react-redux'
import './index.scss'
class Subject extends Component{
    render(){
        let {subjects}=this.props
        return (
            <div className='subject'>
               {
                   subjects.map(item=>{
                       return (
                <div className='subject-item' key={item.seqNum}>
                    <div>
                        <img src={item.imageSrc} width='100%' alt=""/>
                        <div className="container">
                           {
                               item.products.map(item=>{
                                   return (
                             <div className="list" key={item.id}>
                                <img src={item.image} alt=""/>
                                <p className="intro">{item.name.slice(0,7)}</p>
                                <p className="price">￥{(item.price/100).toFixed(2)}</p>
                            </div>
                                   )
                               })
                           }
                           <div className="list all">
                                <span>全部</span>
                           </div>
                        </div>
                    </div>

                </div>
                       )
                   })
               }
            </div>
        )


    }
}
export default connect(state=>{
    return {
        subjects:state.bigdata.filter(item=>{
            if(item.type===5){
                return item
            }
        })
    }
})(Subject)