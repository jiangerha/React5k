/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 21:28:18
 * @LastEditTime: 2019-08-15 11:01:05
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import { PullToRefresh } from 'antd-mobile';

function genData() {
  const dataArr = [];
  for (let i = 0; i < 20; i++) {
    dataArr.push(i);
  }
  return dataArr;
}

export default class Refresh extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   refreshing: false,
    //   height: document.documentElement.clientHeight,
      data: [],
    };
  }

  componentDidMount() {
    // const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    // setTimeout(() => this.setState({
    //   height: hei,
    //   data: genData(),
    // }), 0);
  }

  render() {
    const {children, direction, finishText, refreshData} = this.props;
    return (
      <PullToRefresh
        damping={60}
        ref={el => this.ptr = el}
        style={{
          // height: this.state.height,
          overflow: 'auto',
        }}
        indicator={direction === 'up' ? {deactivate:'上拉可以刷新', finish: finishText || '已完成刷新' } : {}}
        distanceToRefresh={30}
        direction={direction}
        refreshing={this.state.refreshing}
        onRefresh={() => {
          this.setState({ refreshing: true },refreshData);
          setTimeout(() => {
            this.setState({ refreshing: false });
          }, 1000);
        }}
      >
        {/* {this.state.data.map(i => (
          <div key={i} style={{ textAlign: 'center', padding: 20 }}>
            {'pull down'} {i}
          </div>
        ))} */}
        {children}
      </PullToRefresh>
      );
  }
}