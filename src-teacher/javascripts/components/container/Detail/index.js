

import React,{Component} from 'react'
import './index.scss'
import {AppBanner} from '../../common/Banner'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from '../../../../store/actionCreators'
import {Modal} from 'antd-mobile'
import {Link} from 'react-router'
class Detail extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isModalShow:false,
            buynum:1
        }

        this.closeModal = this.closeModal.bind(this)
        this.changeNum = this.changeNum.bind(this)
        this.addCar = this.addCar.bind(this)
    }

    changeNum (type) {
        this.setState(prevState => {
            let num = prevState.buynum
            num += type?1:-1
            if(num <1) num = 1;
            return {
                buynum:num
            }
        })
    }

    closeModal () {
        this.setState({isModalShow:false})
    }

    addCar (item) {
        if(!item) return false;

        this.props.actions.controlCarData({
            id:item.id,name:item.masterName,price:item.skuList[0].price,ctype:true,num:this.state.buynum
        })
    }
   
    componentWillMount () {
        this.props.actions.getDetailData(this.props.params.id)
    }

    render () {
        let {detailData,actions} = this.props
        let {item,desc} = detailData
        let {isModalShow,buynum} = this.state
        console.log(item?item.skuList[0].images:'无数据',111)
        return (
            <div className="main-box detail">
                
                {item?<AppBanner type="detail" banners={item.skuList[0].images}/>:''}
                <div className="item-info">
                    {item?item.masterName:''}
                </div>

                <div onClick={() => { this.setState({ isModalShow:true }) } } className="sku-pick">
                    <span>已选择:

                    {item?item.options.map(op => {
                        return op.item[0]
                    }):''}
                    X</span>
                    <span>{buynum}</span>
                </div>

                <div className="item-bottom">
                    <div className="item-footer-left item-footer-button">
                        <div className="item-footer-home">
                            <Link to={"/car"} className="foot-icon-text">购物车</Link>
                        </div>
                    </div>
                    <div onClick={this.addCar.bind(this,item)} className="item-footer-right item-footer-act">加入购物车</div>
                </div>
                <div className="desc" dangerouslySetInnerHTML={{ __html: desc }}></div>
                <Modal
                popup
                visible={isModalShow}
                onClose={this.closeModal}
                animationType="slide-up"
                >
                    <div className="pick-box">
                        <div className="box-count">
                            <div className="count-title">选择数量</div>
                            <div className="count-body">
                                <div className="count-type">
                                <span onClick={this.changeNum.bind(this,false)} className="icon left">-</span>
                                <span className="center">{buynum}</span>
                                <span onClick={this.changeNum.bind(this,true)} className="count-no-border icon right">+</span>
                            </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default connect(state=>{
    return {
        detailData:state.detailData
    }
},(dispatch)=>{
    return {
        actions:bindActionCreators(actionCreators,dispatch)
    }
})(Detail)