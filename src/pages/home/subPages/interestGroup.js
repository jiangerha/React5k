
/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 16:36:49
 * @LastEditTime: 2019-08-15 21:40:42
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routerAction from '@actions/routerAction'
import Scroll from '@components/Scroll'
import { Tabs } from 'antd-mobile';
// import Basic from './demoCommunity/communityList'
import Basic from './myBran/partyMemList'
import ActivityReg from './myBran/activityReg'
import BranActivity from './myBran/branActivity'
import api from '@/httpTool/httpUrls'
const {teamList, branchSignIn, branchTrends} = api;

const activeColor = "#fe543a"
const config = {
    tabs:[
        { title: "小组列表" },
        { title: "活动报名" },
        { title: "小组动态" },
    ],
    style:{
        tabBarInactiveTextColor:'#333',
        tabBarActiveTextColor:activeColor,
        tabBarBackgroundColor:'#fff',
        distanceToChangeTab:0.2,
        tabBarUnderlineStyle:{
            'width':'20px',
            'height':'2px',
            "background":activeColor,
            'marginLeft':'calc(16.5% - 10px)'
        },
        tabBarTextStyle:{
            'fontSize':14
        }
    }
}

class TabExample extends React.PureComponent{
    state = {
        index:0
    }
    render(){
        const {index} = this.state;
        const cardProps = {
            ...this.props,
            url:index === 0 ? teamList : index === 1 ? branchSignIn : branchTrends,
            type:1
        }
        return(
            <Tabs
                tabs={config.tabs}
                {...config.style}
                initialPage={0}
                prerenderingSiblingsNumber={0}
                onChange={(tab, index) => {this.setState({index})}}
                >
                <Basic {...cardProps}/>
                <ActivityReg {...cardProps} isGroup={true}/>
                <BranActivity {...cardProps} isGroup={true}/>
            </Tabs>
        )
    }
}


class Main extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="annouce leader-calender my-branch-page" style={{height:'100%'}}>
                <Scroll>
                    <TabExample {...this.props}/>
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