/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 15:58:19
 * @LastEditTime: 2019-08-19 20:32:16
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routerAction from '@actions/routerAction'
import LeadingCard from '@/new_components/LeadingCard.jsx'
import routerCon from '@/pages/routerConfig'

class Main extends React.PureComponent{
    componentDidMount(){
        const {pathname} = this.props.location;
        routerCon.map(i => i.path === pathname && (document.title = i.name.indexOf('红岩青松-') > -1 ? i.name : `红岩青松-${i.name}`))
    }
    render(){
        return(
            <div className="leader-calender margin5px"><LeadingCard {...this.props}/></div>
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