/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 13:05:38
 * @LastEditTime: 2019-08-19 20:32:54
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import { List, InputItem,  Button, Modal } from 'antd-mobile';
import { createForm } from 'rc-form';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routerAction from '@actions/routerAction'
import calcIcon from '../../../common/imgs/calc-icon.png'
import tipIcon from '../../../common/imgs/tip-icon.png'
import './index.scss'

const Header = (props) => {
  return (
    <div className="fee-header">
      <img src={calcIcon} alt=""/>
      <span>党费计算器</span>
      <img className="tip-icon" src={tipIcon} alt="" onClick={props.showTipModal}/>
    </div>
  )
}

const btns = ["月薪制","年薪制"]

class Main extends React.Component {
    state = {
        visible:false,
        tipVisible:false,
        calctype:0,
        isShowRes:false
    }
  componentDidMount() {
    document.title = '红岩青松-党费管理'
  }
  submit = () => {
      const {form:{getFieldsValue}} = this.props;
      const data = getFieldsValue();
      (!data || !data["pay"]) ? this.setState({visible:true,isShowRes:false}) : this.setState({isShowRes:true})
  }
  showTipModal = () => this.setState({tipVisible:true})
  render() {
    const { getFieldProps } = this.props.form;
    const {calctype, isShowRes, visible, tipVisible} = this.state;
    return (
      <div className="personal-sugge party-fee">
        <List renderHeader={() => <Header showTipModal={this.showTipModal}/>}>
          <div className="select-type-box">
            <span>选择收入方式</span>
            {
              btns.map(i => <span key={i} className={`btn${calctype && i === "年薪制" || !calctype && i === "月薪制" ? ' on' : ''}`} onClick={() => this.setState({calctype:i === "年薪制" ? 1 : 0})}>{i}</span>)
            }
          </div>
          <InputItem
            {...getFieldProps('pay')}
            clear
            type="number"
            placeholder={`请填写${calctype ? '年' : '月'}总收入（税后）`}
          >税后收入</InputItem>
        </List>
          <Button onClick={this.submit}>立即计算</Button>
          {
            isShowRes && <p className="calc-result">你要缴纳的党费每月是<span className="result">{50}</span>元</p>
          }
          <Modal
            visible={visible}
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
          <Modal
            className="tip-modal"
            visible={tipVisible}
            transparent
            maskClosable={false}
            onClose={() => this.setState({tipVisible:false})}
            title="党费计算基数和标准"
            footer={[{ text: '确定', onPress: () => this.setState({tipVisible:false}) }]}
            wrapProps={{ onTouchStart: this.onWrapTouchStart }}
        >
          <p className="title">1.机关和参公事业单位工作人员党费计算基数</p>
          <p>职务工资+级别工资+工作性津贴+生活性补贴+保留性津补贴）-住房公积金-医疗保险-个人所得税-养老保险-职业年金</p>
          <p className="title">2.工勤人员党费计算基数</p>
          <p>(岗位工资+技术等级工资+工作性津贴+生活性补贴+保留性津补贴)-个人所得税-养老保险-医疗保险-失业保险-工伤保险-生育保险-住房公积金-职业年金</p>
          <p className="title">3.离退休人员党费计算基数 </p>
          <p>基本离退休费总额或基本养老金总额为计算基数，不包括津补贴，生活确实有困难的，经党支部研究同意，可以少交或免交</p>
          <p className="title">4.聘用制人员党费计算基数</p>
          <p>基本工资+绩效-个人所得税-养老保险-医疗保险-失业保险-工伤保险-生育保险-住房公积金</p>
          <p className="title">5.党员党费收取标准</p>
          <p>一、在职党员：3000元（含）以下，0.5%；3000-5000元（含），1%；5000-10000元（含），1.5%；10000元以上，2%。<br/>二、离退休党员：5000元以下（含），0.5%；5000元以上，1%。</p>
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