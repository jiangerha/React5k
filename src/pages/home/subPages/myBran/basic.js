/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 11:36:48
 * @LastEditTime: 2019-08-25 17:41:39
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import {  InputItem,  List, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import Http from '@/httpTool/http'
import TelList from '@/new_components/TelList'
import '../index.scss'
const Item = List.Item;
const Brief = Item.Brief;

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
    label:'联络人'
  },
  {
    name:'adminTel',
    label:'联络人电话'
  },
  {
    name:'memberList',
    label:'党员名单'
  },
]
const teamList = [
  {
    name:'teamName',
    label:'团队名称'
  },
  {
    name:'teamPurpose',
    label:'简介'
  },
  {
    name:'adminName',
    label:'联络人'
  },
  {
    name:'adminTel',
    label:'联络人电话'
  },
  {
    name:'memberList',
    label:'队员名单'
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
  componentWillUnmount = () => {
      this.setState = (state,callback)=>{
        return;
      };
  }

  async queryInfo(){
      const {url,location, sendId} = this.props;
      const propsDataArr = location.search.split("=");
      const propsData = propsDataArr.length > 1 && JSON.parse(decodeURI(propsDataArr[1]));
      if(propsData){
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
      <div className="personal-sugge personal-find-frind basic-form branch-form">
      {
        fieldList.map(({name, label}) => {
          return name === "memberList" ? (
            <List key={name} className="party-list" onClick={() => this.props.history.push(url)}>
              <Item arrow="horizontal">{label}</Item>
          </List>
          ) : name === "teamPurpose" ? <List className="intro-box">
            <Item
              key={name} 
              wrap
              multipleLine
              platform="android"
            ><span>{label}</span><Brief>{data[name]}</Brief></Item>
          </List> : (
            name === "adminTel" ? <a style={{display:'block'}} href={`tel:${data[name]}`}><InputItem
            key={name}
            disabled
            {...getFieldProps(name,{
                initialValue:data[name]
            })}
          >{label}</InputItem></a> : <InputItem
              key={name}
              disabled
              {...getFieldProps(name,{
                  initialValue:data[name]
              })}
            >{label}</InputItem>
          )
        })
      }
        {/* <TelList/> */}
      </div>
    );
  }
}

const Index = createForm()(Main);
export default Index;