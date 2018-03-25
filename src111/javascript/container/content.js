import React, { Component } from 'react';
import Store from '../store'
class Content extends Component{
    constructor(props){
        super(props)
        this.state={
            num:Store.getNum()
        }
    }
    render(){
        let {num}=this.state
        return (
           <div className='App'>
                {num}
           </div>
        )
    }
    componentWillMount(){
       Store.addEventListener(()=>{
           this.setState({num:Store.getNum()})
       })
    }
}
export default Content