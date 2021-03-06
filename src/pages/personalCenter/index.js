/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 20:16:55
 * @LastEditTime: 2019-09-04 23:07:08
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routerAction from '@actions/routerAction'
import Scroll from '@components/Scroll'
import avatarImg from '../../common/imgs/personal/avatar.png'
import headerBg from '../../common/imgs/personal/header-bg.png'
import { List } from 'antd-mobile';
import './index.scss'

const Item = List.Item;

const urlList = ['/message','/suggestion','/problem','/findFriend']
const gridText = ['消息通知','建议','问题','寻找好友'];
const gridData = Array.from(new Array(4)).map((_val, i) => ({
    icon: require(`../../common/imgs/personal/icon-${i}.png`),
    text: gridText[i],
    url:urlList[i]
}));

const ListData = [
    {
        url:'/changePwd',
        text:"修改密码",
    },
    {
        url:'/agreement',
        text:"关于红岩青松"
    },
]

class Main extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    componentDidMount() {
        document.title = `红岩青松-个人中心`
    }
    render() {
        const storage = window.localStorage;
        const user_name = storage.getItem("user_name");
        return (
            <div className="personal-box" style={{height:'100%'}}>
                <Scroll>
                    <div className="avatar-box">
                        <img className="header-bg" src={headerBg} alt="headerBg"/>
                        <div className="avatar-content">
                            <div className="img-box">
                                <img src={avatarImg} alt="avatarImg"/>
                            </div>
                            <p>{user_name}</p>
                        </div>
                    </div>
                    <div className="grid-box">
                        {
                            gridData.map(({icon,text, url},idx) => {
                                return (
                                    <div key={idx} onClick={() => this.props.history.push('/personal' + url)}>
                                        <img src={icon} alt=""/>
                                        <p>{text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="list-box">
                        <List>
                            {
                                ListData.map(({url,text}) => <Item key={url} arrow="horizontal" onClick={() => this.props.history.push('/personal' + url)}>{text}</Item>)
                            }
                        </List>
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