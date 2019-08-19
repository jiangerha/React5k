/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 12:32:13
 * @LastEditTime: 2019-08-19 20:11:48
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routerAction from '@actions/routerAction'
import bannerImg from '../../../common/imgs/home-banner.png'



class Index extends React.PureComponent{
    componentDidMount(){
        document.title = '红岩青松-用户协议'
    }
    render(){
        return(
            <div className="agreement">
                <img src={bannerImg} style={{width:'100%'}}/>
                <div className="content">
                    <p className="title">红岩青松用户协议</p>
                    <p>1.标题一 大段文字内容大段文字内容大段文字内容大段文字内容大段文字内容大段文字内容大段文字内容大段文字内容大段文字内容大段文</p>
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