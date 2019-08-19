/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 13:05:38
 * @LastEditTime: 2019-08-19 20:07:14
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

class Main extends React.Component {
    state = {
        visible:false,
        content:''
    }
  componentDidMount() {
    document.title = `红岩青松-修改密码`
  }
  async changePwd(data){
    const {new_pwd, old_pwd, new_pwd_again} = data;
    const storage = window.localStorage;
    const user_name = storage.getItem("user_name");
    const userPwd = storage.getItem("user_pwd");
    if(old_pwd !== userPwd){
      return this.setState({content:'原密码错误',visible:true})
    }
    if(new_pwd !== new_pwd_again){
      return this.setState({content:'两次新密码不同',visible:true})
      
    }
    Toast.loading('加载中...', 0, null, true)
    const {success, msg} = await Http('get',api.changePwd,{new_pwd,user_name});
      try{
          Toast.hide()
          if(success){
            Toast.success('修改密码成功', 2)
            const storage = window.localStorage;
            storage.removeItem('user_pwd')
            storage.setItem('user_pwd',new_pwd)
            this.props.history.push('/personal')
          }else{
            Toast.fail(msg, 2)
          }
      }catch(e){
          console.log(e)
          Toast.fail(msg, 2)
      }
  }
  submit = () => {
      const {form:{getFieldsValue}} = this.props;
      const data = getFieldsValue();
      (!data || !data["new_pwd"] || !data["old_pwd"] || !data["new_pwd_again"]) ? this.setState({visible:true}) : this.changePwd(data)
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className="personal-sugge personal-find-frind change-pwd">
        <List>
          <InputItem
            {...getFieldProps('old_pwd')}
            type="password"
            clear
            placeholder="请输入原密码"
          >原密码</InputItem>
          <InputItem
            {...getFieldProps('new_pwd')}
            clear
            type="password"
            placeholder="输入新密码"
          >新密码</InputItem>
          <InputItem
            {...getFieldProps('new_pwd_again')}
            clear
            type="password"
            placeholder="请再次输入密码"
          >确认新密码</InputItem>
        </List>
          <Button onClick={this.submit}>确定修改</Button>
          <Modal
            visible={this.state.visible}
            transparent
            maskClosable={false}
            onClose={() => this.setState({visible:false})}
            title="提示"
            footer={[{ text: '确定', onPress: () => this.setState({visible:false}) }]}
            wrapProps={{ onTouchStart: this.onWrapTouchStart }}
        >
            {this.state.content || '您还没有填写内容，请按规定提交'}
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