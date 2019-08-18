/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-05 20:34:27
 * @LastEditTime: 2019-08-18 14:23:28
 * @LastEditors: Please set LastEditors
 */
import React, {Component} from 'react'
import PropTypes from 'proptypes'
import BScroll from 'better-scroll'
import $ from 'jquery'

import './scroll.scss'

class Scroll extends Component {
    constructor(props){
        super(props);
        this.state={
            scroll:null
        }
    }
    static propTypes = {
        // onRef:PropTypes.func.isRequired
    };
    componentDidMount(){
        const wrapper = $(this.refs.scroll);
        wrapper.height(wrapper.height());
        const scroll = new BScroll(wrapper[0],{click: true});
        this.setState({scroll});
        $(window).on('resize',()=>{
            scroll.refresh();
            wrapper.height(wrapper.height());
        });
        // this.props.onRef(this);
    }
    render() {
        return (
            <div className="wrapper" ref="scroll">
                <div className="scroll-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default Scroll