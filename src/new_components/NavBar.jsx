import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
import routerCon from '../pages/routerConfig'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routerAction from '@actions/routerAction'
import {withRouter} from 'react-router-dom'

const titleList = ['领袖日历','党建引领','助推发展','幸福生活'];

class Index extends React.PureComponent{

    routerBack = (paths, pathname, props) => {
        paths.indexOf(pathname) == -1 && props.history.goBack()
        
    }

    render(){
        const {pathname, paths} = this.props;
        const isPersonal = pathname === "/personal";
        const iconColor = isPersonal ? '#fff' : '#333';
        const targetPage = routerCon.filter(i => pathname === i.path)[0] || {};
        const tabNum = !targetPage.name && pathname.indexOf('/index') > -1 && pathname.split('/')[2];
        return(
            <div className={isPersonal ? 'personal-nav' : ''}>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" color={iconColor} size="lg" />}
                    onLeftClick={() => this.routerBack(paths, pathname, this.props)}
                    rightContent={[
                        <Icon key="1" type="ellipsis" color={iconColor} />,
                    ]}
                    >
                    {targetPage.name || `红岩青松-${titleList[tabNum]}`}
                </NavBar>
            </div>
        )
    }
}
export default connect(
    ({routerReducer})=>{
        return{
            path:routerReducer.path
        }
    },
    (dispatch)=>{
        return {
            router:bindActionCreators(routerAction,dispatch)
        }
    }
)(withRouter(Index))