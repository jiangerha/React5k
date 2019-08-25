/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 12:32:13
 * @LastEditTime: 2019-08-25 11:52:14
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routerAction from '@actions/routerAction'
import bannerImg from '../../../common/imgs/home-banner.png'



class Index extends React.PureComponent{
    componentDidMount(){
        document.title = '关于红岩青松'
    }
    render(){
        return(
            <div className="agreement">
                <img src={bannerImg} style={{width:'100%'}}/>
                <div className="content">
                    <p className="title">关于红岩青松</p>
                    <p className="text">重庆市离退休干部管理服务信息化平台是按照中组部老干局要求，市委老干局牵头建设的一个面向全市离退休干部的信息化手机应用。全市老同志及工作人员可使用手机微信，通过市委老干局微信公众号底部链接或“渝快办”移动政务服务平台进入该平台，浏览时政要闻、党建引领、工作动态等，并使用“我的支部”“志愿团队”“兴趣小组”“示范社区”4个类似“朋友圈”的功能，组织开展相关活动，可实现网上发布活动通知、在线报名、发布活动简报等功能。</p>
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    (dispatch)=>{
        return {
            router:bindActionCreators(routerAction,dispatch)
        }
    }
)(Index)