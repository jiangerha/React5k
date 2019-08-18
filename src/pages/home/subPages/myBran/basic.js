/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 11:36:48
 * @LastEditTime: 2019-08-17 11:34:37
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import {  InputItem,  List, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import Http from '@/httpTool/http'
import '../index.scss'
const Item = List.Item;

const branchList = [
  {
    name:'branchName',
    label:'支部名称'
  },
  {
    name:'adminName',
    label:'支部书记'
  },
  {
    name:'department',
    label:'支部委员'
  },
  {
    name:'memberList',
    label:'党员名单'
  },
  {
    name:'adminTel',
    label:'支部电话'
  },
]
const teamList = [
  {
    name:'teamName',
    label:'团队名称'
  },
  {
    name:'teamPurpose',
    label:'团队宗旨'
  },
  {
    name:'adminName',
    label:'团队队长'
  },
  {
    name:'memberList',
    label:'队员名单'
  },
  {
    name:'adminTel',
    label:'团队电话'
  },
]
const groupList = [
  {
    name:'branch5',
    label:'小组名称'
  },
  {
    name:'branch6',
    label:'小组口号'
  },
  {
    name:'branch7',
    label:'小组组长'
  },
  {
    name:'memberList',
    label:'组员名单'
  },
  {
    name:'branch9',
    label:'小组电话'
  },
]

class Main extends React.Component {
    state = {
        data:{}
    }
    componentDidMount = () => {
      this.queryInfo()
  }

  async queryInfo(){
      const {url,location, sendId} = this.props;
      const propsDataArr = location.search.split("=");
      const propsData = propsDataArr.length > 1 && JSON.parse(decodeURI(propsDataArr[1]));
      if(propsData){
        console.log(propsData,'propsData')
        this.setState({data:propsData})
        return sendId && sendId(propsData.id)
      }
      const storage = window.localStorage;
      const tel = storage.getItem("user_name");
      Toast.loading('加载中...', 0, null, true)
      const {data,success,msg} = await Http('get',url,{tel});
      try{
          Toast.hide()
          success ? this.setState({data},() => {
            sendId && sendId(data.id)
          }) : Toast.fail(msg,2)
      }catch(e){
          console.log(e)
          Toast.fail(msg,2)
      }
  }
  render() {
    const { getFieldProps } = this.props.form;
    const { isTeam, isGroup } = this.props;
    const {data} = this.state;
    const {id} = data;
    const fieldList = isTeam ? teamList : isGroup ? groupList : branchList;
    const url = `/${isTeam ? 'teamMemList' : isGroup ? "groupMemList" : 'partyMemList'}${id ? `?id=${id}` : ''}`
    return (
      <div className="personal-sugge personal-find-frind basic-form">
      {
        fieldList.map(({name, label}) => {
          return name === "memberList" ? (
            <List className="party-list" onClick={() => this.props.history.push(url)}>
              <Item arrow="horizontal">{label}</Item>
          </List>
          ) : (
            <InputItem
              disabled
              {...getFieldProps(name,{
                  initialValue:data[name]
              })}
            >{label}</InputItem>
          )
        })
      }
      </div>
    );
  }
}

const Index = createForm()(Main);
export default Index;