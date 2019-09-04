/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 11:36:48
 * @LastEditTime: 2019-09-04 23:19:45
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
// import Scroll from '@components/Scroll'
import { TextareaItem, Toast,  Button, Modal } from 'antd-mobile';
import { createForm } from 'rc-form';
import api from '@/httpTool/httpUrls'
import Http from '@/httpTool/http'
const {problem, suggestion} = api;
const textArr = ['如对本信息化平台有任何建议，请在此处提交，我们将认真吸纳，加以整改优化。','如发现本信息化平台存在的任何问题，请在此处提交，我们将及时整改优化。']

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
    const {type} = this.props;
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
          <p className="extra-text">{type === "problem" ? textArr[1] : textArr[0]}</p>
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