/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 13:05:38
 * @LastEditTime: 2019-08-13 21:18:17
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import { List, InputItem,  Button, Modal } from 'antd-mobile';
import CountDown from './components/countDown';
import { createForm } from 'rc-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as routerAction from '@actions/routerAction';

class Main extends React.Component {
    state = {
        visible:false,
    }
  componentDidMount() {
  }
  submit = () => {
      const {form:{getFieldsValue}} = this.props;
      const data = getFieldsValue();
      (!data || !data["phone"]) ? this.setState({visible:true}) : console.log(getFieldsValue(),'getFieldsValue')
  }

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className="personal-sugge personal-find-frind personal-change-phone">
        <List>
          <InputItem
            {...getFieldProps('phone')}
            type="phone"
            clear
            placeholder="请输入原手机号码"
          >新号码</InputItem>
          <InputItem
            {...getFieldProps('code')}
            clear
            type="code"
            placeholder="输入验证码"
            extra={<CountDown/>}
          >验证码</InputItem>
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