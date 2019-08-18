
/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 16:36:49
 * @LastEditTime: 2019-08-17 14:16:20
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routerAction from '@actions/routerAction'
import Scroll from '@components/Scroll'
import { Tabs } from 'antd-mobile';
import TextList from './affairs'
import CardList from '@/new_components/CardList.jsx'
import api from '@/httpTool/httpUrls'
const {columnIdObj:{HappyLife}} = api;
const {wx, sf, hh, sy} = HappyLife;

const activeColor = "#fe543a"
const config = {
    tabs:[
        { title: "文学" },
        { title: "书法" },
        { title: "绘画" },
        { title: "摄影" },
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
            'marginLeft':'calc(12.5% - 10px)'
        },
        tabBarTextStyle:{
            'fontSize':14
        }
    }
}
class TabExample extends React.PureComponent{
    state = {
        tabActive:0
    }
    render(){
        const {tabActive} = this.state;
        const cardProps = {
            ...this.props,
            columnId:tabActive === 0 ? wx : tabActive === 1 ? sf : tabActive === 2 ? hh : sy
        }
        return(
            <Tabs
                tabs={config.tabs}
                {...config.style}
                initialPage={0}
                prerenderingSiblingsNumber={0}
                onChange={(tab, index) => this.setState({tabActive:index})}
                >
                <TextList {...cardProps}  isGroup={true}/>
                <CardList {...cardProps}  isGroup={true}/>
                <CardList {...cardProps}  isGroup={true}/>
                <CardList {...cardProps}  isGroup={true}/>
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