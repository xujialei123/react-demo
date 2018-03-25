/* eslint no-dupe-keys: 0 */
import React, { Component } from 'react';

import { ListView } from 'antd-mobile';
import axios from 'axios'

// const data = [
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
//     title: 'Meet hotel',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
//     title: 'McDonald\'s invites you',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
//     title: 'Eat the week',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
// ];
const NUM_ROWS = 20;
let pageIndex = 1;

function genData(pIndex = 1,callback) {
  const dataBlob = {};
  let total=0
  axios.get('/mz/api/recommend/home',{params:{page:pIndex,num:NUM_ROWS}}).then(res=>{
    res.data.data.list.forEach((item,i)=>{
      dataBlob[item.id]=item
    })
    total = res.data.data.total
     callback({dataBlob,total});
  })
 
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
      total:0
    };
  }

  componentDidMount() {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    // simulate initial Ajax
   genData(pageIndex,(data)=>{
        this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data.dataBlob),
        isLoading: false,
        total:data.total
      });
    })
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
  //     });
  //   }
  // }

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = { ...this.rData, ...genData(++pageIndex) };
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  }

  render() {
   
    
    const row = (rowData, sectionID, rowID) => {
     
      return (
        <div key={rowID} style={{ padding: '20px 15px' }}>
          
         
              {rowID}
            </div>
        
      );
    };
    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
       
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderRow={row}
        className="am-list"
        pageSize={4}
        useBodyScroll
        onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}

export default Demo