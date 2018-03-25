
import React,{Component} from 'react'
import './index.scss'
import {Link} from 'react-router'
class AppHeaderTabBar extends Component {
    render () {

        let { toggleNav } = this.props

        return (
            <div className="titleBar">
                <label onClick={toggleNav} className="controlLogo"><i className="fa fa-navicon"></i></label>
                <span id="toolBarTitle" className="titleName">卖座商城</span>
                <Link className="userCenter" to="/mine">
                    <i className="fa fa-user"></i>
                </Link>
            </div>
        )
    }
}


export default AppHeaderTabBar