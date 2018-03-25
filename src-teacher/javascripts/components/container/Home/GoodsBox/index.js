
import React,{Component} from 'react'
import './index.scss'
import {connect} from 'react-redux'
import actionCreators from '../../../../../store/actionCreators'
import {bindActionCreators} from 'redux'
/* eslint no-dupe-keys: 0 */
import { ListView } from 'antd-mobile';
import axios from 'axios'
import {hashHistory} from 'react-router'

//估计是一次请求20行的意思
const NUM_ROWS = 20;
//控制页数的，现在是第0页
let pageIndex = 1;



//一个无状态组件，其实就是每一个商品
let Item = (props) => {
    let {data,toDetail} = props
    return (
        <div onClick={toDetail.bind(this,data.id)} className="item">
        
            <div className="img-box">
            <img src={data.skuList[0].image}/>
            </div>
            
            <div className="name"> 
                {data.masterName}
            </div>
            <div className="content">
                <span className="price">￥{(data.skuList[0].price/100).toFixed(2)}</span>
                <span className="inventory">已售{data.skuList[0].salesCount}</span>
            </div>

        </div>
    )
}

class AppGoodsBox extends Component {
    constructor(props) {
        super(props);
        
        //ListView组件中需要使用的数据格式就是dataSource，这是人家自己搞出来的
        const dataSource = new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        });
    
        this.state = {
          dataSource,
          isLoading: true,
        };

        this.toDetail = this.toDetail.bind(this)
    }


      componentWillMount() {
        //执行下面的代码好像是能实现滚动到某个位置
      // you can scroll to the specified position
      // setTimeout(() => this.lv.scrollTo(0, 120), 800);
       //数据化数据获取，调用actions里面的方法来获取第一波数据
        this.props.actions.getGoods(pageIndex,()=>{
            //数据获取完成后，将isLoading改为false
              this.setState({isLoading: false});
        })

    }
  
    // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
    //商品数据，使用了redux之后我们会管理在store中，当数据更新了的时候，容器组件会获取到最新的数据给UI组件传递进来
    //UI组件利用props来接收，所以我们在这个钩子函数里准备接收最新的数据，且将其放在状态上
    componentWillReceiveProps(nextProps) {
        console.log('来数据啦',nextProps)
      if (nextProps.rData !== this.props.rData) {
          //把接收到的新数据更新在状态上，促使重新render
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(nextProps.rData),
        });
      }
    }
  
    //实现加载新数据的函数，当滚动到底部的时候会执行
    onEndReached = (event) => {
      // load new data
      // hasMore: from backend data, indicates whether it is the last page, here is false
      //如果处于正在加载的过程，或者没有更多数据了，就不要继续获取
      if (this.state.isLoading && pageIndex*NUM_ROWS>=this.state.total) {
        return;
      }
      
      //调用actionCreator的方法获取数据...
      this.setState({ isLoading: true });
      this.props.actions.getGoods(++pageIndex,()=>{
        this.setState({isLoading:false});
      })
          
    }


    toDetail (id) {
        hashHistory.push({pathname:'/detail/'+id})
    }

    render () {
        //专门渲染每一行的函数
        const row = (rowData, sectionID, rowID) => {
            return <Item toDetail={this.toDetail} key={rowData.id} data={rowData}/>
        };
        return (
            <div className="app-goods-box">
                <div className="title">—&nbsp;好货精选&nbsp;—</div>
                <div className="items">
                    
                    <ListView
                        ref={el => this.lv = el}
                        dataSource={this.state.dataSource}
                        initialListSize={20}
                        renderFooter={() => (<div style={{ padding: 10, textAlign: 'center' }}>
                        {this.state.isLoading ? 'Loading...' : 'Loaded'}
                        </div>)}

                        renderRow={row}
                        className="tailloader"
                        
                        useBodyScroll
                        pageSize = {20}

                        scrollRenderAheadDistance={200}

                        onEndReached={this.onEndReached}
                        
                        onEndReachedThreshold={10}
                    />

                </div>
            </div>
        )
    }


}

export default connect(state=>{
    //state上的数据是数组，我们在这里将其改装成 dataBlob的格式以供ListView使用
    let dataBlob = {}
    state.goodsList.list.forEach((item,i)=>{
        dataBlob[i] = item
    })
    return {
        rData:dataBlob,//当前数据
        total:state.goodsList.total
    }
},(dispatch) => {
    return {
        actions:bindActionCreators(actionCreators,dispatch)
    }
})(AppGoodsBox)