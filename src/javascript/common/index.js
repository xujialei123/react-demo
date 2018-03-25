import React,{Component} from 'react'
import {connect} from 'react-redux'
// import axios from 'axios'
import Swiper from 'swiper'
// import {Link} from 'react-router'

class Banner extends Component{
    // constructor(props){
    //     super(props)
      
    // }
    shouldComponentUpdate(props,state){
        if(this.props.banners.length>0){
            return false
        }else{
            return true
        }
    }
    initSwiper(){
          let className = this.props.type==='detail'?'.app-detail-banner':'.app-banner'
        this.swiper = new Swiper(className,{
            pagination:{el:'.swiper-pagination'},loop:true,autoplay:true
        })
    }
  componentDidMount(){
      this.initSwiper()
  }
    
    render(){
        let {banners,type} = this.props
        return (
            <div className='main-box'>
            <div className={`swiper-container ${type==='detail'?'app-detail-banner':'app-banner'}`}>
                <div className='swiper-wrapper'>
                   
                {
                    type==='home'?
                    banners.map((item,i)=>{
                        return <div className='swiper-slide' key ={i}>
                                <img width='100%' src={item.imageSrc} alt=''/>
                        </div>
                    }):banners.map((item,i)=>{
                         return <div className='swiper-slide' key ={i}>
                                <img width='100%' src={item} alt=''/>
                        </div>
                    })
                }
                
                
                
                </div>
            
            
            <div className='swiper-pagination'></div>
            </div>
            </div>
        )
    }
}
export {Banner}
export default connect(state=>{
return {
    banners:state.bigdata.filter(item=>{
        if(item.type===2){
            return item
        }
    })
}
}

)(Banner)