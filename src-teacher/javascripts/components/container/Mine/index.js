

import React,{Component} from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from '../../../../store/actionCreators'




class Mine extends Component {

    

    render () {

        let {userInfo} = this.props

        return (
            <div className="main-box">
               mine=={userInfo.username}
            </div>
        )
    }
}


export default connect(state=>state)(Mine)

