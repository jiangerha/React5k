/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 12:32:13
 * @LastEditTime: 2019-08-19 20:08:56
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routerAction from '@actions/routerAction'
import CommonForm from './commonForm';

const Index = (props) => <CommonForm {...props} pageTitle="红岩青松-困难问题" type="problem"/>

export default connect(
    null,
    (dispatch)=>{
        return {
            router:bindActionCreators(routerAction,dispatch)
        }
    }
)(Index)