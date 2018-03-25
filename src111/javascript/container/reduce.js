import React, { Component } from 'react';
import actionCreator from '../store/actionCreator'
class Reduce extends Component{
    render(){
        return <button onClick={actionCreator.reduce}>-</button>
    }
}
export default Reduce