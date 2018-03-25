import React,{Component} from 'react'
import {Link} from 'react-router'
import {hashHistory} from 'react-router'
class Detail extends Component{
    constructor(props){
        super(props)
        this.back=this.back.bind(this)
    }
    back(){
        alert(1)
        // this.props.history.push('/home')
        hashHistory.push('/home')
    }
   render(){
       console.log(this)
       return (
           <div className='main-box'>
           {/* {this.props} */}
           {
               this.props.location.pathname
           }
           {this.props.params.id}
           <button onClick={this.back}>home</button>
            </div>
       )
   }
}
export default Detail