import React, { Component } from 'react';
class BuyInfo extends Component{
    constructor(props){
        super(props)
       
    }
   
    render(){
        let {changeNum,buynum} =this.props
        // console.log(changeNum)
        return (
            <div className='sku-box'>
            <div className="box-body">
                <div className="sku-info">
                    <div className="box-sku-head clearfix">
                        <div className="sku-pic">
                            <img src={this.props.info.skuList[0].images[0]} alt="initSku.name" width='86px' height='86px'/>
                        </div>
                        <div className="sku-context">
                            <div className="price">￥{(this.props.info.skuList[0].price/100).toFixed(2)}</div>
                            <div className="name">选择 规格 数量</div>
                        </div>
                        <div><i className="fa fa-window-close-o " onClick={this.props.close}></i></div>
                    </div>
                </div>
                <div className="sku-select">
                    <div className="box-sku-list">
                        <div className="option-name">规格</div>
                        <div className="option-list"><span className="pick">2.5千克</span></div>
                    </div>
                </div>
                <div className="box-count">
                    <div className="count-title">选择数量</div>
                    <div className="count-body">
                        <div className="count-type">
                            <span className="jian js" onClick={changeNum.bind(this,false)}>-</span>
                            <span className="center">{buynum}</span>
                            <span className="jia js" onClick={changeNum.bind(this,true)}>+</span>
                        </div>
                    </div>
                </div>
                <div className="box-bottom">

                </div>
            </div>
            </div>
        )
    }
}
export default BuyInfo