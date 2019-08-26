
/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 16:36:49
 * @LastEditTime: 2019-08-25 18:47:54
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routerAction from '@actions/routerAction'
import BgImg from '../../../common/imgs/lifeService/bg-img.png'
import IsDevingIcon from '@/common/imgs/deving.png'
import './index.scss'

const iconUrls = ['https://www.jkwin.com.cn/ystm/org.do?index=1&regWayCode=WX&method=toOrgPage','https://m.ctrip.com/','http://cq.12348.gov.cn/wechat/app_chongqing/homeUser.html','javascrpt:;']
const imgUrls = ['http://m.weather.com.cn','http://m.46644.com/express/','https://touch.go.qunar.com/']

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

class Main extends React.PureComponent{
    componentDidMount(){
        document.title = `红岩青松-生活服务`
    }
    render(){
        return(
            <div className="life-service district">
                {/* <div className="bg-box">
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
                </div> */}
                <div className="deving-box">
                    <img src={IsDevingIcon} alt=""/>
                    <p>正在开发中，敬请期待</p>
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
)(Main)