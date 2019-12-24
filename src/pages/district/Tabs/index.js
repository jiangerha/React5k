/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 14:49:17
 * @LastEditTime : 2019-12-24 15:44:49
 * @LastEditors  : Please set LastEditors
 */
import React from 'react';
import config from './config';
import { Tabs,  Grid } from 'antd-mobile';
import Scroll from '@components/Scroll';
import ListView from '@/new_components/ListView'
import IsDevingIcon from '@/common/imgs/deving.png'
import telListData from './telList.json'
import TelItem from '../components/telItem'
import './index.scss'

const gridData = Array.from(new Array(15)).map((_val, i) => ({
  icon: require(`../../../common/imgs/district/${i}.png`),
  text: '微万州',
}));


export default class TabExample extends React.PureComponent{
  state = {
    tabIndex:0
  }
  render(){
    const {tabIndex} = this.state;
    const data = telListData[parseInt(tabIndex)];
    return (
      <div className="index-tab">
        <Tabs
          tabs={config.tabs}
          {...config.style}
          initialPage={0}
          prerenderingSiblingsNumber={0}
          onChange={(tab, index) => {this.setState({tabIndex:index})}}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          <Scroll>
            <div className="tel-card-list">
                {
                    data.length > 0 && data.map((i,idx) => <TelItem key={idx} data={i} nameText={ tabIndex == 0 ? "区县" : ""} {...this.props}/>)
                }
            </div>
          </Scroll>
          {/* <Scroll>
            <div className="tel-card-list">
                {
                    telListData.organTel.length > 0 && telListData.organTel.map((i,idx) => <TelItem key={idx} data={i} {...this.props}/>)
                }
            </div>
          </Scroll>
          <Scroll>
            <div className="tel-card-list">
                {
                    telListData.collegeTel.length > 0 && telListData.collegeTel.map((i,idx) => <TelItem key={idx} data={i} {...this.props}/>)
                }
            </div>
          </Scroll>
          <Scroll>
            <div className="tel-card-list">
                {
                    telListData.unitTel.length > 0 && telListData.unitTel.map((i,idx) => <TelItem key={idx} data={i} {...this.props}/>)
                }
            </div>
          </Scroll> */}
          {/* <div className="deving-box">
            <img src={IsDevingIcon} alt=""/>
            <p>正在开发中</p>
          </div> */}
    </Tabs>
  </div>
    )
  }
};