/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 14:41:23
 * @LastEditTime: 2019-08-17 14:34:09
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routerAction from '@actions/routerAction'
import TabExample from './Tabs/index'
import Scroll from '@components/Scroll'


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
            <div className="annouce leader-calender" style={{height:'100%'}}>
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