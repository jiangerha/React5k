/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 15:58:19
 * @LastEditTime: 2019-08-15 10:39:20
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routerAction from '@actions/routerAction'
import LeadingCard from '@/new_components/LeadingCard.jsx'

class Main extends React.PureComponent{
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