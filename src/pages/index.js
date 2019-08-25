/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-05 20:34:27
 * @LastEditTime: 2019-08-25 13:48:05
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routerAction from '@actions/routerAction'
import { Switch, Redirect, Route } from 'react-router-dom'
// import { Route, IndexRoute } from 'react-router'

//css
import '@common/styles/index.scss'
import NavFooter from '@/new_components/NavFooter'
import NavBar from '@/new_components/NavBar.jsx'
import Routes from './routerConfig'
import HomeImg from '../common/imgs/home-img.png'


class App extends Component {
    constructor(){
        super()
        const {pathname} = window.location;
        const arr = ['/','/login']
        this.state = {
            isShowImg:arr.indexOf(pathname) > -1 ? true : false,
        }
    }
    componentDidMount = () => {
        const storage = window.localStorage;
        setTimeout(() => this.setState({isShowImg:false}), 3000);
        this.isLogin()
    }
    isLogin = () => {
        const storage = window.localStorage;
        const userName = storage.getItem("user_name");
        const userPwd = storage.getItem("user_pwd");
        (!userName || !userPwd) && this.props.history.push('/login')
    }
    // goBack(){
    //     console.log(document.location.pathname,'back')
    //     const path = document.location.pathname;
    //     path.indexOf('/index') > -1 && window.history.replaceState(null, null, '')
    //     // window.history.replaceState(null, null, '/');
    // }
    // componentWillUnmount(){
    //     window.removeEventListener('popstate', this.goBack, false);
    // }
    render(){
        let pathTF = false;
        const {paths,location, pathname, router} = this.props;
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
                            {/* <Route path='/' component={App}> */}
                                {/* <IndexRoute component={Home} /> */}
                                {
                                    Routes.map(({path, component},idx) => <Route key={idx} exact path={path} component={component}></Route>)
                                }
                                {/* <Redirect from="/" to="/index/0" /> */}
                                {/* <Redirect from="/index" to="/index/0" /> */}
                            {/* </Route> */}
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
    ({routerReducer})=>{
        return {
            paths:routerReducer.paths,
            pathname:routerReducer.path,
            title:routerReducer.title
        }
    },
    (dispatch)=>{
        return {
            router:bindActionCreators(routerAction,dispatch)
        }
    }
)(App)