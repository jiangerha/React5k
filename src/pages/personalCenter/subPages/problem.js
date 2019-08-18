/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 12:32:13
 * @LastEditTime: 2019-08-17 10:31:25
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routerAction from '@actions/routerAction'
import CommonForm from './commonForm';

const Index = (props) => <CommonForm {...props} type="problem"/>

export default connect(
    null,
    (dispatch)=>{
        return {
            router:bindActionCreators(routerAction,dispatch)
        }
    }
)(Index)