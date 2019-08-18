
/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 16:36:49
 * @LastEditTime: 2019-08-18 11:41:37
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routerAction from '@actions/routerAction'
import BgImg from '../../../common/imgs/lifeService/bg-img.png'
import './index.scss'

const iconUrls = ['http://www.cq12320.cn/index.html','javascript:;','http://cq.12348.gov.cn/wechat/app_chongqing/homeUser.html','javascrpt:;']
const imgUrls = ['javascript:;','http://m.46644.com/express/','javascrpt:;']

const iconText = ['预约挂号','票务服务','法律服务','养老机构'];
const iconData = Array.from(new Array(4)).map((_val, i) => ({
    text:iconText[i],
    icon: require(`../../../common/imgs/lifeService/icon-${i}.png`),
    path:iconUrls[i]
}));

const imgText = ['天气预报','快递查询','旅游咨询'];
const imgData = Array.from(new Array(3)).map((_val, i) => ({
    text:imgText[i],
    icon: require(`../../../common/imgs/lifeService/img-${i}.png`),
    path:imgUrls[i]
}));

const Item = ({icon, text, path}) => (
    <div className="card-item" onClick={() => window.location.href = path}>
        <img src={icon} alt=""/>
        <p>{text}</p>
    </div>
)

const Main = () => (
    <div className="life-service">
        <div className="bg-box">
            <img src={BgImg} alt=""/>
        </div>
        <div className="icon-list">
            <div>
                {
                    iconData.map((i,idx) => <Item key={idx} {...i}/>)
                }
            </div>
        </div>
        <div className="img-list">
            {
                imgData.map((i,idx) => <Item key={idx} {...i}/>)
            }
        </div>
    </div>
)

export default connect(
    null,
    (dispatch)=>{
        return {
            router:bindActionCreators(routerAction,dispatch)
        }
    }
)(Main)