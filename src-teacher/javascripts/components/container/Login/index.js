

import React,{Component} from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from '../../../../store/actionCreators'




class Login extends Component {

    constructor (props) {
        super (props)

        this.login = this.login.bind(this)
    }
    
    login () {
        let username = '123'
        let password = '456'
        this.props.actions.login(username,password,(result) => {
            if(result){
                alert('success')
                this.props.history.replace('/mine')
            }else{
                alert('fail')
            }
        })

    }

    render () {
        return (
            <div className="main-box">
               <button onClick={this.login}>login</button>
            </div>
        )
    }
}


export default connect(state=>state,dispatch => {
    return {
        actions:bindActionCreators(actionCreators,dispatch)
    }
})(Login)

