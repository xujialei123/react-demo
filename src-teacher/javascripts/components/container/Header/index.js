
import React,{Component} from 'react'

import './index.scss'

import AppHeaderTabBar from './TabBar'
import AppHeaderNav from './Nav'

class AppHeader extends Component {

    constructor(props){
        super(props)

        this.state = {
            isNavShow:false
        }

        this.toggleNav = this.toggleNav.bind(this)
    }

    toggleNav () {
        
        this.setState(prevState=>{
            return {
                isNavShow:!prevState.isNavShow
            }
        })
    }

    render () {
        let { isNavShow } = this.state
        return (
            <div className="app-header">
                <AppHeaderTabBar toggleNav={this.toggleNav} />
                <AppHeaderNav isNavShow={isNavShow}  toggleNav={this.toggleNav} />
            </div>
        )
    }
}


export default AppHeader