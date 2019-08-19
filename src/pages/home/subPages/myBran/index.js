
/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 16:36:49
 * @LastEditTime: 2019-08-19 20:33:25
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routerAction from '@actions/routerAction'
import Scroll from '@components/Scroll'
import { Tabs } from 'antd-mobile';
import Basic from './basic'
import ActivityReg from './activityReg'
import BranActivity from './branActivity'
import api from '@/httpTool/httpUrls'

const {myBranch, partyNews, branchActivity} = api;

const activeColor = "#fe543a"
const config = {
    tabs:[
        { title: "基本情况" },
        { title: "支部活动" },
        { title: "支部动态" },
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
        index:0,
        id:''
    }
    
    sendId = (id) => this.setState({id})

    render(){
        const {index, id} = this.state;
        const cardProps = {
            ...this.props,
            url:index === 0 ? myBranch : index === 1 ? branchActivity : partyNews
        }
        return(
            <Tabs
                tabs={config.tabs}
                {...config.style}
                initialPage={0}
                prerenderingSiblingsNumber={0}
                onChange={(tab, index) => {this.setState({index})}}
                >
                <Basic {...cardProps} sendId={this.sendId}/>
                <ActivityReg {...cardProps} id={id}/>
                <BranActivity {...cardProps} id={id}/>
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
        document.title = '红岩青松-我的支部'
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