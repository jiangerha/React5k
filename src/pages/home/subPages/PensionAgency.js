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
        document.title = '养老机构'
    }
    render(){
        return(
            <div className="agreement">
                <img src={bannerImg} style={{width:'100%'}}/>
                <div className="content">
                    <p className="title">2019年度重庆市养老机构等级评定</p>
                    <p className="text">为提高养老服务质量，培育养老服务品牌，充分发挥“星级”“叶级”养老机构的示范引领作用，全面提升养老机构管理水平和服务能力，根据重庆市民政局《关于做好2019年养老机构等级评定工作的通知》（渝民〔2019〕70号）要求，重庆市民政局委托第三方机构，依据《养老机构等级划分与评定》（GB/T37276-2018，全市养老机构“星级”评定依据）、《养老机构服务质量基本规范》（GB/T35796-2017，全市养老机构申报依据）、《重庆养老机构管理办法》（全市养老机构申报的有关资格审查依据）、《养老机构等级划分与评定》（重庆市地方标准报批稿，全市养老机构“叶级”评定依据），于2019年10月14日至10月27日对申报“五星”级的28家养老机构、申报“四星”级的32家养老机构、申报“五叶”级的8家养老机构、申报“四叶”级的12家养老机构进行了实地评定。经重庆市养老机构评定委员会复审研究确认以下养老机构名单。</p>
                    <p className="subTitle">五星级养老机构：</p>
                    <p className="text">重庆市第一社会福利院</p>
                    <p className="text">重庆医科大学附属第一医院青杠老年养护中心。</p>
                    <p className="subTitle">四星级养老机构：</p>
                    <p className="text">重庆市第二社会福利院</p>
                    <p className="text">重庆市第三社会福利院</p>
                    <p className="text">云阳县城乡社会福利院</p>
                    <p className="text">重庆市渝北区祥昇龙山老年养护中心</p>
                    <p className="text">重庆市九龙坡区宏善康乐源养护中心</p>
                    <p className="text">重庆合展天池养老服务有限公司</p>
                    <p className="text">重庆四联优侍美林高龄社养护中心</p>
                    <p className="text">重庆两江新区宏善康享苑颐养中心</p>
                    <p className="text">重庆市南岸区美瑞嘉年江南人家老年养护院</p>
                    <p className="text">重庆凯尔慈怀老年公寓</p>
                    <p className="text">重庆市万州区天援社会福利院</p>
                    <p className="text">重庆市巴南区花溪街道养老服务中心</p>
                    <p className="text">重庆合展至善养老服务有限公司</p>
                    <p className="subTitle">五叶级养老机构：</p>
                    <p className="text">重庆市第一社会福利院</p>
                    <p className="text">重庆凯尔慈佑养老服务中心（渝中区上清寺街道社区养老服务中心）</p>
                    <p className="text">重庆合展天池养老服务有限公司</p>
                    <p className="subTitle">四叶级养老机构：</p>
                    <p className="text">重庆市巴南区花溪街道养老服务中心</p>
                    <p className="text">重庆合展至善养老服务有限公司</p>
                    <p className="text">重庆市大渡口区凯尔心怡老年公寓</p>
                    <p className="text">江北区观音桥街道社区养老服务中心</p>
                    <p className="text">重庆市大渡口区广仁颐合老年公寓</p>
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