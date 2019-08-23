/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-06 21:50:48
 * @LastEditTime: 2019-08-23 21:29:29
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import config from './config';
import { Tabs } from 'antd-mobile';
import LeaderCalendar from '../LeaderCalendar/index'
import LeadingParty from '../LeadingParty'
import PromotingDev from '../PromotingDev'
import HappyLife from '../HappyLife'
import './index.scss'
const titleList = ['领袖日历','党建引领','助推发展','幸福生活'];

export default class TabExample extends React.PureComponent {

    state = {
      initialPage:0,
    }

  static getDerivedStateFromProps(props, state){
    const {match:{params:{tabStatus}}} = props
    if(tabStatus != state.initialPage){
      return{
        initialPage:Number(tabStatus),
      }
    }
    return null
  }
  
  render(){
    const {props} = this;
    return(
      <div className="index-tab">
        <Tabs
          tabs={config.tabs}
          {...config.style}
          swipeable={false}
          initialPage={this.state.initialPage}
          prerenderingSiblingsNumber={0}
          onChange={(tab, index) => { props.history.push(`/index/${index}`)}}
        >
          <LeaderCalendar {...props}/>
          <LeadingParty {...props}/>
          <PromotingDev {...props}/>
          <HappyLife {...props}/>
        </Tabs>
      </div>
    )
  }
}