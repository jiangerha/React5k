/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-05 20:34:27
 * @LastEditTime : 2019-12-23 22:01:24
 * @LastEditors  : Please set LastEditors
 */
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routerAction from '@actions/routerAction'
import * as showAdAction from '@actions/showAdAction'
import { Switch, Redirect, Route } from 'react-router-dom'
// import { Route, IndexRoute } from 'react-router'

//css
import '@common/styles/index.scss'
import NavFooter from '@/new_components/NavFooter'
import NavBar from '@/new_components/NavBar.jsx'
import Routes from './routerConfig'
import HomeImg from '../common/imgs/home-img.png'


class App extends Component {
    constructor(props){
        super(props)
        const {isShowAd} = props;
        const {pathname} = window.location;
        const arr = ['/','/login']
        this.state = {
            isShowImg:arr.indexOf(pathname) > -1 && isShowAd ? true : false,
        }
    }
    componentDidMount = () => {
        const {hideAd} = this.props;
        setTimeout(() => this.setState({isShowImg:false},hideAd.hideAd), 3000);
        this.isLogin()
    }
    isLogin = () => {
        const storage = window.localStorage;
        const userName = storage.getItem("user_name");
        const userPwd = storage.getItem("user_pwd");
        (!userName || !userPwd) && this.props.history.push('/login')
    }
    render(){
        let pathTF = false;
        const {paths,location, pathname, router,isShowAd} = this.props;
        paths.forEach(v=>{
            if(pathname===null&&(location.pathname===v)){
                pathTF=true
            }else if(v===pathname){
                pathTF=true
            }else if(location.pathname===v){
                pathTF=true
            }
        })
        router.changePath(location.pathname)
        return (
            <div className={`index-page${location.pathname === '/details' ? ' details-bg-white' : ''}`}>
                <div className="main" style={{
                    marginBottom:pathTF?'50px':'0px',
                }}>
                    {/* {
                        location.pathname !== '/login' && <NavBar {...this.props} pathname={location.pathname}/>
                    } */}
                    {   !this.state.isShowImg && 
                        <Switch>
                            {
                                Routes.map(({path, component},idx) => <Route key={idx} exact path={path} component={component}></Route>)
                            }
                            <Redirect from="/*" to="/index" />
                        </Switch>
                    }
                </div>
                {
                    pathTF && 
                    <div className="footer">
                        <NavFooter></NavFooter>
                    </div>
                }
                {
                    this.state.isShowImg && <div className="whole-box">
                        <img className="whole-page-img" src={HomeImg} alt=""/>
                    </div>
                }
            </div>
        )
    }
}

export default connect(
    ({routerReducer,showAdReducer})=>{
        return {
            paths:routerReducer.paths,
            pathname:routerReducer.path,
            title:routerReducer.title,
            isShowAd:showAdReducer
        }
    },
    (dispatch)=>{
        return {
            router:bindActionCreators(routerAction,dispatch),
            hideAd:bindActionCreators(showAdAction,dispatch),
        }
    }
)(App)