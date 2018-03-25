import React,{Component} from 'react';
import actionCreator from '../store/actionCreator'
class Add extends Component{
    render(){
        return (
            <button onClick={actionCreator.addNum.bind(this,2)}>+</button>)
    }
    
}
export default Add