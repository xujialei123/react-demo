import React,{Component} from 'react'
import Control from './control'
import {connect} from 'react-redux'

class Number extends Component{
    render(){
        console.log(this)
        let {num,doublenum}=this.props
        return (
            <div> 
                <div>
                 {num}--{doublenum}
                </div>
                <Control/>
            </div>
        )
    }
}
let  mapStateToProps = state=>{
    return {
        num:state.num,
        doublenum:state.num*2
    }
}
let rq = connect(mapStateToProps)(Number)
export default rq