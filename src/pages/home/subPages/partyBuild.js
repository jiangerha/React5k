/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 16:36:49
 * @LastEditTime: 2019-08-15 21:41:17
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routerAction from '@actions/routerAction'
import Scroll from '@components/Scroll'
import { Tabs } from 'antd-mobile';
import LeadingCard from '@/new_components/LeadingCard.jsx'
import api from '@/httpTool/httpUrls'
const {columnIdObj:{LeadingParty}} = api;
const {dzdg, kc} = LeadingParty;

const activeColor = "#fe543a"
const config = {
    tabs:[
        { title: "党章党规" },
        { title: "课程" },
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
            'marginLeft':'calc(25% - 10px)'
        },
        tabBarTextStyle:{
            'fontSize':14
        }
    }
}
class TabExample extends React.PureComponent{
    state={
        tabActive:0
    }
    render(){
        const {tabActive} = this.state;
        const cardProps = {
            ...this.props,
            columnId:tabActive === 0 ? dzdg : kc
        }
        return(
            <Tabs
                tabs={config.tabs}
                {...config.style}
                initialPage={0}
                prerenderingSiblingsNumber={0}
                onChange={(tab, index) => this.setState({tabActive:index})}
                >
                <LeadingCard {...cardProps}/>
            </Tabs>
        )
    }
}
// const TabExample = (props) => (
//   <div>
    
//   </div>
// );


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
            <div className="annouce leader-calender" style={{height:'100%'}}>
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