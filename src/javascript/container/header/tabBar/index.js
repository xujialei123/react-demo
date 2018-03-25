import React,{Component} from 'react'
import './index.scss'
class TabBar extends Component{
        render(){
            let { toggleNav }=this.props
            return (
                <div className="titleBar">
                    <label onClick={toggleNav} className="controlLogo"><i className="fa fa-navicon"></i></label>
                    <span id="toolBarTitle" className="titleName">卖座商城</span>
                    <a className="userCenter" href="http://m.maizuo.com/v4/#!/center">
                        <i className="fa fa-user"></i>
                    </a>
            </div>
            )
        }
}
export default TabBar