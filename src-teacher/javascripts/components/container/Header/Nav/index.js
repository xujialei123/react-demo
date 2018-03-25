
import React,{Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Link} from 'react-router'

import './index.scss'
class AppHeaderNav extends Component {

    render () {

        let { navs,isNavShow,toggleNav } = this.props
        
        return (
            <section className="app-header-nav">
                <div className="nav">

                <ReactCSSTransitionGroup
                transitionName={{
                    enter:'slideInLeft',
                    leave:'slideOutLeft'
                }}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}>

                    {
                        isNavShow?<ul className="nav-list animated">
                            {
                                navs.map(item=><li key={item.id}>
                                    <Link onClick={toggleNav} to={{
                                        pathname:item.pathname
                                    }} >
                                        <span>{item.title}</span>
                                        <i className="fa fa-angle-right"></i>
                                    </Link>
                                </li>)
                            }                    
                        </ul>:''
                    }
               
                </ReactCSSTransitionGroup>
                <ReactCSSTransitionGroup
                transitionName={{
                    enter:'fadeIn',
                    leave:'fadeOut'
                }}
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}>
                    
                    {
                        isNavShow? <div onClick={toggleNav} className="mask animated"></div>:''
                    }
                    
                </ReactCSSTransitionGroup>
                </div>
            </section>
        )
    }


    compo
}

AppHeaderNav.defaultProps = {
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


export default AppHeaderNav