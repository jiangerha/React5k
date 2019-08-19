/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 13:05:38
 * @LastEditTime: 2019-08-19 20:12:22
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
        visible:false
    }
  componentDidMount() {
    document.title = `红岩青松-寻找好友`
  }
  async findFriend(data){
    const {friend_name, title, content} = data;
    const storage = window.localStorage;
    const tel = storage.getItem("user_name");
    Toast.loading('加载中...', 0, null, true)
    const {msg,success} = await Http('get',api.findFriend,{tel, title, friend_name, content});
    try{
        Toast.hide()
        if(success){
          Toast.success('查找成功', 2)
          this.props.history.push('/personal')
        }else{
          Toast.fail(msg, 2)
        }
    }catch(e){
        console.log(e)
        Toast.fail(msg, 2);
    }
  }
  submit = () => {
      const {form:{getFieldsValue}} = this.props;
      const data = getFieldsValue();
      (!data || !data["friend_name"]) ? this.setState({visible:true}) : this.findFriend(data)
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className="personal-sugge personal-find-frind">
        <List>
          <InputItem
            {...getFieldProps('friend_name')}
            clear
            placeholder="必填"
          >好友姓名</InputItem>
          <InputItem
            {...getFieldProps('title')}
            clear
            placeholder="选填，可增加搜索准确度"
          >所在部门</InputItem>
          <InputItem
            {...getFieldProps('content')}
            clear
            placeholder="选填，可增加搜索准确度"
          >岗位级别</InputItem>
        </List>
          <Button onClick={this.submit}>提交</Button>
          <Modal
            visible={this.state.visible}
            transparent
            maskClosable={false}
            onClose={() => this.setState({visible:false})}
            title="提示"
            footer={[{ text: '确定', onPress: () => this.setState({visible:false}) }]}
            wrapProps={{ onTouchStart: this.onWrapTouchStart }}
        >
            您还没有填写内容，请按规定提交
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