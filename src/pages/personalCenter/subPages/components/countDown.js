/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 20:48:07
 * @LastEditTime: 2019-08-13 21:22:33
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import { Button } from 'antd-mobile';
export default class CountDown extends React.PureComponent {

    constructor(){
      super()
      this.state = {
        time: 60,
        btnDisable:false,
        btnContent: '发送验证码'
      };
      this.timeChange = null;
    }
  
    sendCode = () =>{
      this.setState({
        btnDisable: true,
        btnContent: "重新发送(60s)",
      });
      this.timeChange = setInterval(this.clock,1000);
    };
  
    clock =()=>{
      let count = this.state.time;
      if (count > 0) {
        //当ti>0时执行更新方法
        count = count - 1;
         this.setState({
            time: count,
            btnContent:`重新发送(${count}s)`,
          });
      }else{
        //当ti=0时执行终止循环方法
        clearInterval(this.timeChange);
        this.setState({
          btnDisable: false,
          time: 60,
          btnContent: "发送验证码",
        });
      }
    };
  
    render() {
      const {btnDisable, btnContent} = this.state;
      return (
        <Button onClick={this.sendCode} disabled={btnDisable}>{btnContent}</Button>
      );
    }
  }