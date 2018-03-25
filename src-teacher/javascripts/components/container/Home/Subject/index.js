


import React,{Component} from 'react'
import './index.scss'
import {connect} from 'react-redux'
import SubjectItem from './SubjectItem'
class AppSubject extends Component {
   

    render () {
        let {subjects} = this.props
        return (
            <div className="app-subject">
            {
                subjects.map((item,i) => {
                    return <SubjectItem data={item}/>
                })
            }
                
            </div>
        )
    }


}

export default connect(state=>{
    return {
        subjects:state.bigdata.filter((item)=>{
            if(item.type===5){return item}
        })
    }
})(AppSubject)