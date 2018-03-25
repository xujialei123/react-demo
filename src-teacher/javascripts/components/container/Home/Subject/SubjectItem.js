


import React,{Component} from 'react'
import './index.scss'
import {connect} from 'react-redux'

class AppSubjectItem extends Component {
   

    render () {

        let {data} = this.props

        return (
            <div className="app-subject-item">
                <img width="100%"  src={data.imageSrc} alt=""/>

                <div className="subject-container">
                {
                    data.products.map(item=>{
                        return <div key={item.id} className="subject-item">
                                                        
                            <img src={item.image}/>
                                
                            <p className="control-name">{item.name}</p>
                            <p className="control-price">￥{(item.price/100).toFixed(2)}</p>
                        
                        </div>
                    })
                }
                    
                    <div className="subject-item subject-all">
                        <span className="pic-list-right" data-growing-idx="1">全部</span>
                    </div>
                </div>
            </div>
        )
    }


}

export default AppSubjectItem