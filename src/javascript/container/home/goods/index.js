import React, { Component } from 'react';
import Item from './item'
import './index.scss'


 class Goods extends Component{
     render(){
        //  console.log(this.props)
         return (
             <div className='goods'>
                 <div className="title">— 好货精选 —</div>
                   <Item /> 
             </div>
         )
     }
 }
 export default Goods