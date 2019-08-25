/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 14:41:23
 * @LastEditTime: 2019-08-25 11:10:57
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
        document.title = '红岩青松-通讯录'
    }
    render() {
        return (
            <div className="district" style={{height:'100%'}}>
                <Scroll>
                    {/* <div className="body">
                    </div> */}
                    <TabExample/>
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