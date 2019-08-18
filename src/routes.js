/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-05 20:34:27
 * @LastEditTime: 2019-08-18 19:39:56
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react'
// import {Route,Switch} from 'react-router-dom'
import {
    // BrowserRouter as Router,
    Route
    // Link
} from 'react-router-dom'
import Index from '@/pages/index.js'

class Routes extends Component {
    render(){
        return (
            <div style={{height:"100%",overflow: 'hidden'}}>
                {/* <Switch>
                    <Route component={Index}></Route>
                </Switch> */}
                <Route component={Index}></Route>
            </div>
        )
    }
}

export default Routes