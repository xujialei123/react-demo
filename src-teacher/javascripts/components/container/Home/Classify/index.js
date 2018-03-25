


import React,{Component} from 'react'
import './index.scss'
import {connect} from 'react-redux'

class AppClassify extends Component {
   
    shouldComponentUpdate () {
        if(this.props.classes.length>0){
            return false;
        }else{ 
            return true;
        }
    }

    render () {
        let {classes} = this.props
        return (
            <div className="app-classify">
                <ul>
                    {
                        classes.map(item => {
                            return <li key={item.seqNum} className="classify-item">
                                <a >
                                    <img src={item.imageSrc} alt=""/>
                                </a>
                                
                                <p>{item.name}</p>
                            </li>
                        })
                    }
                    
                </ul>
            </div>
        )
    }


}

export default connect(state=>{
    return {
        classes:state.bigdata.filter((item)=>{
            if(item.type===1){return item}
        })
    }
})(AppClassify)