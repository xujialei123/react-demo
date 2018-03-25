import React,{Component} from 'react'
import '../../../stylesheets/reset.scss'
// import {Link} from 'react-router'
import Banner from '../../common'
import Classify from './classify'
import Subject from './subject'
import Goods from './goods'
import {bindActionCreators} from 'redux'
import actionCreators from '../../../store/actionCreators'
import {connect} from 'react-redux'

class Home extends Component{
    // constructor(props){
    //     super(props)

    // }
    componentWillMount(){
        // console.log(this)
        this.props.actions.getBigData()
        
    }
    componentDidUpdate(){
        // this.props.actions.getGoods()
    }
    render(){
        return ( 
        <div>
             <Banner type='home'/> 
             <Classify/>
             <Subject/>
             <Goods/>
        </div> )
    }
}
export default connect(state=>state,(dispatch)=>{
    return {
        actions:bindActionCreators(actionCreators,dispatch)
    }
})(Home)
