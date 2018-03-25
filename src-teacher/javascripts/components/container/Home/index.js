

import React,{Component} from 'react'
import AppBanner from '../../common/Banner'
import AppClassify from './Classify'
import AppSubject from './Subject'
import AppGoodsBox from './GoodsBox'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from '../../../../store/actionCreators'



class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    componentWillMount () {
        this.props.actions.getBigData()
    }
    render () {
        let {items} = this.state
        return (
            <div className="main-box home">
               
               <AppGoodsBox/>
            </div>
        )
    }
}


export default connect(state=>state,(dispatch)=>{
    return {
        actions:bindActionCreators(actionCreators,dispatch)
    }
})(Home)