import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreator from '../../store/actionCreators'


class Control extends Component{
    render(){
        console.log(this)
        let {addNum,reduceNum,say}=this.props.numbers
        return (
            <div>
                <button onClick={addNum}>+</button>
                <button onClick={reduceNum}>-</button>
                <button onClick={say}>say</button>
            </div>
        )
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
       numbers:bindActionCreators(actionCreator,dispatch)
     }
}
export default connect(state=>state,mapDispatchToProps)(Control)