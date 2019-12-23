/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-06 20:55:03
 * @LastEditTime : 2019-12-23 21:44:58
 * @LastEditors  : Please set LastEditors
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routerAction from '@actions/routerAction'
//轮播图
import { Toast } from 'antd-mobile';
import TabExample from './components/Tabs/index'
import Scroll from '@components/Scroll'
import bannerImg from '../../common/imgs/home-banner.png'

class Main extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }
    componentDidMount() {
        window.document.title = '红岩青松'
        this.isLogin()
    }
    isLogin = () => {
        let isLoad = true;
        const storage = window.localStorage;
        const userName = storage.getItem("user_name");
        const userPwd = storage.getItem("user_pwd");
        if(!userName || !userPwd){
            Toast.fail('请先登录',1)
            isLoad = false;
            // this.props.history.push('/login')
        }
        return isLoad
    }
    render() {
        const isLoad = this.isLogin();
        return (
                isLoad && <div className="main-box home-page" style={{height:'100%'}}>
                <Scroll>
                    <div className="body">
                        <img src={bannerImg} style={{width:'100%',float:'left'}}/>
                        <TabExample {...this.props}/>
                    </div>
                </Scroll>
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
)(Main)