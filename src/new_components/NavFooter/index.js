/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-05 21:33:05
 * @LastEditTime: 2019-08-25 22:03:01
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routerAction from '@actions/routerAction'
import {TabBar} from 'antd-mobile'
import NavConfg from './config'
import {withRouter} from 'react-router-dom'
import * as showAdAction from '@actions/showAdAction'

const {data, style} = NavConfg

class NavFooter extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         selectedTab: 'index',
    //     }
    // }

    state = {
        selectedTab: 'index',
        selectedNav:''
    }

    componentWillMount(){
        const {location:{pathname}} = this.props;
        this.setState({
            selectedTab: pathname === '/' ? 'index' : pathname.split("/")[1]
        })
        this.changeTab()
    }

    changeTab(){
        window.addEventListener("popstate", () => { 
            const {pathname} = window.location;
            const {hideAd} = this.props;
            pathname === '/' && window.history.replaceState(null,null,'/index')
            pathname && hideAd.hideAd()
            this.setState({selectedNav:pathname})
        }, false); 
    }

    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
          return;
        };
    }

    /**
     * 渲染footer ICON
     */
    renderNavIcon(url){
        return (
            <div style={{
                width: '24px',
                height: '24px',
                background: `url(${url}) center center /  24px 24px no-repeat` }}
            />
        )
    }

    calcPath = path => (path === '/index' || path === '/') ? 'index' : path.split("/")[1]

    render() {
        const {path} = this.props;
        const {selectedNav, selectedTab} = this.state;
        return (
            <TabBar {...style}>
                {
                    data.map(v => {
                        const {title, key, icon, selectedIcon} = v;
                        return (
                            <TabBar.Item
                                key={key}
                                title={title}
                                icon={this.renderNavIcon(icon)}
                                selectedIcon={this.renderNavIcon(selectedIcon)}
                                selected={path ? this.calcPath(path) === v.key : selectedNav ? selectedNav.indexOf(v.key) > -1 : selectedTab === v.key}
                                onPress={() => {
                                    this.setState({
                                        selectedNav:'',
                                        selectedTab: v.key,
                                    });
                                    this.props.history.push('/'+v.key)
                                    this.props.router.changePath('/'+v.key)
                                    // sessionStorage.setItem('__search_prev_path__','/'+v.key)
                                }}
                            />
                        )
                    })
                }
            </TabBar>
        )
    }
}
export default connect(
    ({routerReducer,showAdReducer})=>{
        return{
            path:routerReducer.path,
            isShowAd:showAdReducer
        }
    },
    (dispatch)=>{
        return {
            router:bindActionCreators(routerAction,dispatch),
            hideAd:bindActionCreators(showAdAction,dispatch),
        }
    }
)(withRouter(NavFooter))