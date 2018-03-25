import React,{Component} from 'react'
// import {Link} from 'react-router'
import {hashHistory} from 'react-router'
import {Banner} from '../../common'
import axios from 'axios'
import DetailInfo from './detailinfo'
import './index.scss'
import BuyInfo from './buyinfo'
class Detail extends Component{
    constructor(props){
        super(props)
        this.state={
            data:'',
            isShow:false,desc:'',
            buynum:1
        }
        this.close=this.close.bind(this)
        this.open=this.open.bind(this)
        this.changeNum=this.changeNum.bind(this)
       
    }
    changeNum(type){
        //   console.log(type)
        this.setState(preState=>{
            let num = preState.buynum
            num+=type?1:-1
          
            if(num<1) num=1
            return {
                buynum:num
            }
        })
    }
  getDetailInfo(){
    axios.get('/mz/api/item?id='+this.props.params.id).then(res=>{
        //   console.log(res.data)
        this.setState({
          
            data:res.data.data
        })
    })
  }
  getImageInfo(){
      axios.get('/mz/api/item/desc?id='+this.props.params.id).then(res=>{
        //   console.log(res.data)
           this.setState({desc:res.data.data.desc})
        //    console.log(this.state.desc)
      })
  }
  close(){
      this.setState({isShow:false})
  }
  open(){
      this.setState({isShow:true})
  }
  componentWillMount(){
      this.getDetailInfo()
      this.getImageInfo()
  }
   render(){
    //  console.log(this.state.data)
     let {isShow,desc,buynum}=this.state
     let banners=this.state.data?this.state.data.skuList[0].images:''
       return (
           <div className='main-box'>
               { banners? <Banner type='detail' banners={banners}/>:''}
                <DetailInfo data={this.state.data}  open={this.open} buynum={buynum}/>
                {isShow?<BuyInfo info={this.state.data}  close={this.close} changeNum={this.changeNum} buynum={buynum}/>:''}
                {desc?<div dangerouslySetInnerHTML={{__html:desc}}></div>:''}

               
              
              
         
            </div>
       )
   }
}
export default Detail