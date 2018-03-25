

import React,{Component} from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from '../../../../store/actionCreators'


const Item = (props) => {
    let {name,id,price,num} = props.data
    let {controlCarData} = props.actions
    return (

        <li style={{borderBottom:'1px solid #333'}}>
            <span>{name}</span>
            <p>价格：{price}</p>
            <p>
                <button onClick={controlCarData.bind(this,{
                    id,name,price,num:1,ctype:false
                })}>-</button>
                <span>{num}</span>
                <button onClick={controlCarData.bind(this,{
                    id,name,price,num:1,ctype:true
                })}>+</button>
            </p>
        </li>

    )
}


class Car extends Component {

    

    render () {
        let {car,actions,all_info} = this.props
        return (
            <div className="main-box">
                <ul>
                    {
                        car.map(item=>{
                            return <Item actions={actions} data={item} />
                        })
                    }
                </ul>
                <p>总数量:{all_info.all_num}；总价格：{all_info.all_price}</p>
            </div>
        )
    }
}


export default connect(state=>{

    let all_info = {all_num:0,all_price:0}

    state.car.forEach(item=>{
        all_info.all_num+=item.num
        all_info.all_price+=item.num*item.price
    })

    return {
        car:state.car,
        all_info
    }
},dispatch => {
    return {
        actions:bindActionCreators(actionCreators,dispatch)
    }
})(Car)

