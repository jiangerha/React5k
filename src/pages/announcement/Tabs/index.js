/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 14:49:17
 * @LastEditTime: 2019-08-17 14:33:48
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import config from './config';
import { Tabs } from 'antd-mobile';
import LeadingCard from '@/new_components/LeadingCard.jsx'
import './index.scss'
import api from '@/httpTool/httpUrls'
const {columnIdObj:{announcement}} = api;
const {tzgg, dcwj, zsjs} = announcement;

export default class TabExample extends React.PureComponent{
  state = {
    tabActive:0
  }
  conponentDidMount = () => {
    
  }
  render(){
    const {tabActive} = this.state;
    const cardProps = {
      ...this.props,
      columnId:tabActive === 0 ? tzgg : tabActive === 1 ? dcwj : zsjs
    }
    // const {history,location:{search}} = this.props;
    // !search && history.push(`/announcement?columnId=${tzgg}`)
    return <div className="index-tab annouce-tab">
    <Tabs
      tabs={config.tabs}
      {...config.style}
      initialPage={0}
      prerenderingSiblingsNumber={0}
      onChange={(tab, index) => this.setState({tabActive:index})}
    >
      <LeadingCard {...cardProps}/>
    </Tabs>
  </div>
  }
}