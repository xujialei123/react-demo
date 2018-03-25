import React,{Component} from 'react'
import TabBar from './tabBar'
import AppNav from './nav'
class AppHeader extends Component{
    constructor(props){
        super(props)
        this.state={
            isShow:false
        }
        this.toggleNav=this.toggleNav.bind(this)
    }
    toggleNav(){
        console.log(111)
        this.setState(prevState=>{
            return {
                isShow:!prevState.isShow
            }
        })
    }
    render(){
        let {isShow}=this.state
        return (
            <div className='app-header'>
            <TabBar toggleNav={this.toggleNav}/>
            <AppNav isShow={isShow} toggleNav={this.toggleNav}/>
            
            </div>
        )
    }
}
export default AppHeader