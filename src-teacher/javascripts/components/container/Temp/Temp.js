/* eslint no-dupe-keys: 0 */
import React from 'react'
import { ListView } from 'antd-mobile';
import axios from 'axios'


//估计是一次请求20行的意思
const NUM_ROWS = 20;
//控制页数的，现在是第0页
let pageIndex = 1;

//生成一个dataBlob的东西，这个东西里是一个一个的数据，每次执行都能根据目前的页数生成对应的20げ

// {0:aad,1:asd}

function genData(pIndex = 1,callback) {
  const dataBlob = {};
  let total = 0
  axios.get('/mz/api/recommend/home',{
      params:{page:pIndex,num:NUM_ROWS}
  }).then(res=>{
      res.data.data.list.forEach((item,i)=>{
          dataBlob[(pIndex-1)*NUM_ROWS+i] = item
      })
      total = res.data.data.total
      callback({dataBlob,total});
  })
  
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    
    //估计是在创建一个跟数据有关的大家伙
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
      total:0
    };
  }

  componentWillMount() {
      //执行下面的代码好像是能实现滚动到某个位置
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    // simulate initial Ajax
    genData(pageIndex,(data) => {
        this.rData = data.dataBlob
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            isLoading: false,
            total:data.total
        });
    });
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
  //     });
  //   }
  // }

  //实现加载新数据的函数
  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && pageIndex*NUM_ROWS>=this.state.total) {
      return;
    }
    
    this.setState({ isLoading: true });
    genData(++pageIndex,(data) => {
        this.rData = { ...this.rData,...data.dataBlob };
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            isLoading: false,
            total:data.total
          });
    });

    
  }

  render() {
      //这是一条缝儿
    console.log('render')
    //每次执行一次，都能根据data中的一条数据生成一个虚拟dom结构
    const row = (rowData, sectionID, rowID) => {
      return (
        <div key={rowID} style={{ padding: '20px 15px' }}>
          {rowData.masterName}--{rowID}
        </div>
      );
    };
    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        initialListSize={20}
        renderFooter={() => (<div style={{ padding: 10, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}

        renderRow={row}
        className="main-box am-list"
        
        useBodyScroll
        pageSize = {20}

        scrollRenderAheadDistance={200}

        onEndReached={this.onEndReached}
        
        onEndReachedThreshold={10}
      />
    );
  }
}


export default Demo