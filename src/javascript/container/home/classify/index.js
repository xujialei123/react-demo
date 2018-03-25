import React, { Component } from 'react';
import './index.scss'
import {connect} from 'react-redux'
class Classify extends Component {
    shouldComponentUpdate(){
        if(this.props.shops.length>0){
             return false
        }else{
             return true
        }
       
    }
    render(){
        let {shops}=this.props
        return (
            <div className='classify'>
                <ul>
                   {shops.map(item=> 
                   <li className="shop" key={item.seqNum}>
                        <img src={item.imageSrc} alt=""/>
                        <p>{item.name}</p>

                    </li>)}
                </ul>
            </div>
        )
    }
}
export default connect( state=>
{return {
    shops:state.bigdata.filter(item=>{
        if(item.type===1){
            return item
        }
    })
}}
)(Classify)
