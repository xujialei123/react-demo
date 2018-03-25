import React,{Component} from 'react'
import './index.scss'
import ReactCssTransitionGroup from 'react-addons-css-transition-group'
import {Link} from 'react-router'

class AppNav extends Component {
    render(){
        let { navs,isShow,toggleNav } = this.props
        console.log(this.props)
      
        return (
            <section className="app-header-nav">
                <div className="nav">

                <ReactCssTransitionGroup
                transitionName={{
                    enter:'slideInLeft',
                    leave:'slideOutLeft'
                }}
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}>

                    {
                        isShow?<ul className="nav-list animated">
                            {
                                navs.map(item=><li key={item.id}>
                                    <Link onClick={toggleNav} to={{pathname:item.pathname}} >
                                        <span>{item.title}</span>
                                        <i className="fa fa-angle-right"></i>
                                    </Link>
                                </li>)
                            }                    
                        </ul>:''
                    }
               
                </ReactCssTransitionGroup>

                     <ReactCssTransitionGroup
                        transitionName={{
                            enter:'fadeIn',
                            leave:'fadeOut'
                        }}
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={1000}>

                    {
                        isShow? <div className="mask animated"></div>:''
                    }
                    </ReactCssTransitionGroup>
                   
                </div>
            </section>
        )
    }
}
AppNav.defaultProps={
    navs:[
        {
        id:1,title:'首页',pathname:'/home'
        },
        {
            id:2,title:'影票',pathname:'/home'
        },
        {
            id:3,title:'我的',pathname:'/home'
        },
        {
            id:4,title:'卖座卡',pathname:'/home'
        }
]
}
export default AppNav