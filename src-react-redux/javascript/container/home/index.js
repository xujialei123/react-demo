import React,{Component} from 'react'
import '../../../stylesheets/reset.scss'
import {Link} from 'react-router'
import Banner from '../../common'

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            todos:[{id:1,title:'lalala'},{id:2,title:'bbbb'},{id:3,title:'ppp'}]
        }
    }
    render(){
        return <Banner> 111 </Banner>  
    }
}
export default Home