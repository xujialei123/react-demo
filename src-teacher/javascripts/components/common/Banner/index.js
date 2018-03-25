


import React,{Component} from 'react'
import {connect} from 'react-redux'


import axios from 'axios'


import {Link} from 'react-router'
import Swiper from 'swiper'



class AppBanner extends Component {
    constructor(props) {
        super(props)
        
    }

    componentDidUpdate () {

        this.swiper.update()
    }

    initSwiper () {
       
        let className = this.props.type==='detail'?'.app-detail-banner':'.app-banner'
        this.swiper = new Swiper(className,{
            pagination:{el:'.swiper-pagination'},loop:true,autoplay:true
        })
    }

    componentDidMount () {
        // if(this.props.type === 'detail') {
           this.initSwiper()
        // }    
    }

    shouldComponentUpdate (props) {
        if(this.props.banners.length>0){
            if(this.props.banners!==props.banners){
                return true
            }
            return false;
        }else{ 
            return true;
        }
    }

    render () {
        
       let {banners,type} = this.props
       console.log(banners,111222)
        return (
            <div className={`swiper-container ${type==='detail'?'app-detail-banner':'app-banner'}`}>
               <div className="swiper-wrapper">
                {
                    type==='detail'?banners.map((item,i)=>{
                      
                        return <div className="swiper-slide"  key={i}>
                            <img width="100%" src={item}/>
                        </div>
                    }):
                    banners.map((item,i)=>{
                        return <div className="swiper-slide"  key={i}>
                            {/* <Link to={{pathname:`/detail/${item.id}`}}> */}
                                <img width="100%" src={item.imageSrc}/>
                            {/* </Link> */}
                        </div>
                    })
                }
                    
               </div>
               <div className="swiper-pagination"></div>
            </div>
        )
    }


}

export {AppBanner}

export default connect(state=>{
    console.log(state)
    return {
        banners:state.bigdata.filter((item)=>{
            if(item.type===2){return item}
        })
    }
})(AppBanner)