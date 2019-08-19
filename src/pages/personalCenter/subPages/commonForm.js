/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 11:36:48
 * @LastEditTime: 2019-08-19 20:09:37
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
// import Scroll from '@components/Scroll'
import { TextareaItem, Toast,  Button, Modal } from 'antd-mobile';
import { createForm } from 'rc-form';
import api from '@/httpTool/httpUrls'
import Http from '@/httpTool/http'
const {problem, suggestion} = api;

class Main extends React.Component {
    state = {
        visible:false
    }
  componentDidMount() {
    document.title = this.props.pageTitle;
  }
  postMsg = async(data) => {
    const {type} = this.props;
    const url = type === "problem" ? problem : suggestion;
    const storage = window.localStorage;
    const tel = storage.getItem("user_name");
    Toast.loading('加载中...', 0, null, true)
    const {success, msg} = await Http('get',url,{...data,tel});
      try{
          Toast.hide()
          if(success){
            Toast.success('提交成功', 2)
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
      (!data || !data["content"]) ? this.setState({visible:true}) : this.postMsg(data)
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className="personal-sugge">
        <TextareaItem
            {...getFieldProps('content')}
            clear
            placeholder='输入遇到的问题或者建议...'
            rows={5}
            count={500}
          />
          {/* <InputItem
            {...getFieldProps('phone')}
            clear
            type="phone"
            placeholder="选填，方便我们联系你"
          >手机号码</InputItem> */}
          <Button onClick={this.submit}>提交</Button>
          <Modal
            visible={this.state.visible}
            transparent
            maskClosable={false}
            onClose={() => this.setState({visible:false})}
            title="提示"
            footer={[{ text: '确定', onPress: () => this.setState({visible:false}) }]}
            wrapProps={{ onTouchStart: this.onWrapTouchStart }}
            // afterClose={() => { alert('afterClose'); }}
        >
            您还没有填写内容，请按规定提交
        </Modal>
      </div>
    );
  }
}

const Index = createForm()(Main);
export default Index;