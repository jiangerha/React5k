
/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 16:36:49
 * @LastEditTime: 2019-08-18 10:41:25
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routerAction from '@actions/routerAction'
import Scroll from '@components/Scroll'
import { Tabs } from 'antd-mobile';
import Basic from './myBran/basic'
import ActivityReg from './myBran/activityReg'
import BranActivity from './myBran/branActivity'
import api from '@/httpTool/httpUrls'

const {myBranch, teamNews, teamActivity } = api;

const activeColor = "#fe543a"
const config = {
    tabs:[
        { title: "基本情况" },
        { title: "团队活动" },
        { title: "团队动态" },
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

// const TabExample = (props) => (
//   <div>
//     <Tabs
//       tabs={config.tabs}
//       {...config.style}
//       initialPage={0}
//       prerenderingSiblingsNumber={0}
//       onChange={(tab, index) => { console.log('onChange', index, tab); }}
//       onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
//     >
//       <Basic {...props} url={api.myTeam} isTeam={true}/>
//       <ActivityReg {...props}  isTeam={true}/>
//       <BranActivity {...props}  isTeam={true}/>
//     </Tabs>
//   </div>
// );

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
            url:index === 0 ? myBranch : index === 1 ? teamActivity : teamNews
        }
        return(
            <Tabs
                tabs={config.tabs}
                {...config.style}
                initialPage={0}
                prerenderingSiblingsNumber={0}
                onChange={(tab, index) => this.setState({index},()=>{
                    console.log(this.state.index)
                })}
                >
                <Basic {...cardProps} sendId={this.sendId} isTeam={true}/>
                <ActivityReg {...cardProps} id={id} isTeam={true}/>
                <BranActivity {...cardProps} id={id} isTeam={true}/>
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