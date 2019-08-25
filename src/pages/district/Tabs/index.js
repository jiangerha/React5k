/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 14:49:17
 * @LastEditTime: 2019-08-25 12:03:58
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import config from './config';
import { Tabs,  Grid } from 'antd-mobile';
import Scroll from '@components/Scroll';
import ListView from '@/new_components/ListView'
import IsDevingIcon from '@/common/imgs/deving.png'
import './index.scss'

const gridData = Array.from(new Array(15)).map((_val, i) => ({
  icon: require(`../../../common/imgs/district/${i}.png`),
  text: '微万州',
}));


const TabExample = () => (
  <div className="index-tab">
    <Tabs
      tabs={config.tabs}
      {...config.style}
      initialPage={0}
      prerenderingSiblingsNumber={0}
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
    >
      <div className="deving-box">
        <img src={IsDevingIcon} alt=""/>
        <p>正在开发中，敬请期待</p>
      </div>
      {/* <Scroll>
        <Grid data={gridData} columnNum={3} hasLine={false} activeStyle={false} />
      </Scroll> */}
      {/* <ListView/> */}
    </Tabs>
  </div>
);

export default TabExample;