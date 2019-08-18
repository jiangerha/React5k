/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 22:32:57
 * @LastEditTime: 2019-08-15 18:38:07
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import { SearchBar } from 'antd-mobile';
import ResultList from '../myBran/partyMemList'

export default class Main extends React.PureComponent {
  state = {
      val:''
  };
  searchList = () => {
      const {val} = this.state;
      console.log(val,'vvvvvv')
  }
  render() {
      const {val} = this.state;
      const {isGroup, type} = this.props;
    return (
        <div className="demo-community">
            {/* <SearchBar 
                value={val}
                placeholder={`搜索${isGroup ? '兴趣小组' : '社区'}`} 
                maxLength={10}
                onSubmit={this.searchList}
                onClear={val => this.setState({val})}
                onChange={val => this.setState({val})}
                onCancel={() => this.setState({val:''},this.searchList)}
             /> */}
            <ResultList />
        </div>
    );
  }
}
