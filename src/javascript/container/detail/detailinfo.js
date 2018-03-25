import React, { Component } from 'react';
class DetailInfo extends Component{
    addCart(params){
        let {id,name,price,num}=params
        if(localStorage[id]){
           num=JSON.parse(localStorage[id]).num+num
            localStorage[id]=JSON.stringify({id,name,price,num})
            return 
        }
        localStorage[id]=JSON.stringify({id,name,price,num})
        // if(localStorage.car)
    }
    render(){
        // console.log(this.props.data)
        
        // let item=
        let {data,buynum}=this.props
        let {masterName,slaveName,id}=data?data:''

        return data?( <div><div className='detail-info'>
                <div className='name'>{masterName}-{data.options[0]?data.options[0].item[0]:''}</div>
                <div className="subname">{slaveName}</div>
                <div className="price">￥{(data.skuList[0].price/100).toFixed(2)}</div>
                <div className="tips">
                    <div className="express">快递：0.00元</div>
                    <div className="sale-count">销量：{this.props.data.skuList[0].salesCount}</div>
                    <div className="location">全国</div>

                </div>
            </div>
            <div className="sku-pick" onClick={this.props.open}>
                <span>已选择:{data.options[0]>1?data.options[0].item[0]:''}</span>
                <span className="count-num">×1</span>
                <i className='fa fa-angle-right'></i>

            </div>
            <div className="detail-footer">
                <div className="add-car">
                    <div className="fa fa-shopping-cart"></div>
                    <div className='add'>进入购物车</div>
                </div>
                <div className="btn-buy" onClick={this.addCart.bind(this,{id,name:masterName,price:(data.skuList[0].price/100).toFixed(2),num:buynum})}>
                    立即购买
                </div>
            </div>
            </div>
            ):(<div></div>)
    }
}
export default DetailInfo