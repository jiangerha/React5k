/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 13:05:38
 * @LastEditTime: 2019-08-18 10:20:17
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import { List, InputItem,  Button, Modal, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routerAction from '@actions/routerAction'
import api from '@/httpTool/httpUrls'
import Http from '@/httpTool/http'
import loginBg from '../common/imgs/login-bg.png'
import pwdIcon from '../common/imgs/pwd-icon.png'
import phoneIcon from '../common/imgs/phone-icon.png'
import showPwd from '../common/imgs/show-pwd.png'
import hidePwd from '../common/imgs/hide-pwd.png'

class Main extends React.Component {
    state = {
        visible:false,
        content:'',
        isShowPwd:false,
    }
    componentDidMount = () => {
  }

  async login(data){
      Toast.loading('加载中...', 0, null, true)
      const {success, msg} = await Http('get',api.login,data);
      try{
          Toast.hide()
          if(success){
            Toast.success('登录成功', 2)
            const storage = window.localStorage;
            Object.keys(data).map(i => storage.setItem(i,data[i]))
            this.props.history.push('/')
          }else{
            Toast.fail(msg, 2)
          }
      }catch(e){
        Toast.fail(msg, 2)
        console.log(e)
      }
  }
  submit = () => {
      const {form:{getFieldsValue}} = this.props;
      const data = getFieldsValue();
      (!data || !data["user_name"] || !data["user_pwd"]) ? this.setState({visible:true,content:''}) : this.login(data)
  }
  render() {
    const { getFieldProps } = this.props.form;
    const {isShowPwd, content, visible} = this.state;
    return (
      <div className="personal-sugge login">
        <img className="img-bg" src={loginBg} alt=""/>
        <List>
          <InputItem
            {...getFieldProps('user_name')}
            clear
            placeholder="请输入手机号码"
          >
          <img className="label-icon" src={phoneIcon} alt=""/>
          </InputItem>
          <InputItem
            {...getFieldProps('user_pwd')}
            clear
            type={isShowPwd ? "text" : "password"}
            maxLength={20}
            placeholder="请输入密码"
            extra={<img className="pwd-extra-icon" src={!isShowPwd ? hidePwd : showPwd} alt="" onClick={() => this.setState({isShowPwd:!isShowPwd})}/>}
          >
          <img className="label-icon" src={pwdIcon} alt=""/>
          </InputItem>
        </List>
          <Button onClick={this.submit}>登录</Button>
          <Modal
            visible={visible}
            transparent
            maskClosable={false}
            onClose={() => this.setState({visible:false})}
            title="提示"
            footer={[{ text: '确定', onPress: () => this.setState({visible:false}) }]}
            wrapProps={{ onTouchStart: this.onWrapTouchStart }}
        >
            {content || '您还没有填写内容，请按规定提交'}
        </Modal>
      </div>
    );
  }
}

const Index = createForm()(Main);
export default connect(
    null,
    (dispatch)=>{
        return {
            router:bindActionCreators(routerAction,dispatch)
        }
    }
)(Index)