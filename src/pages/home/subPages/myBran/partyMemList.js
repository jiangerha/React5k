/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 11:36:48
 * @LastEditTime: 2019-08-18 19:46:40
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import { List, Toast } from 'antd-mobile';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routerAction from '@actions/routerAction'
import Refresh from '@/new_components/Refresh'
import api from '@/httpTool/httpUrls'
import Http from '@/httpTool/http'
import '../index.scss'

const {partyMembers, teamMembers, myTeam} = api;

const Item = List.Item;

const ListData = Array.from(new Array(20)).map((_val, i) => ({
    name: '活动经费',
}));

class Index extends React.PureComponent{
    state = {
        list:[],
        pagination:{
            currentPage:1,
            pageSize:10
        },
        finishText:'',
    }

    componentDidMount = () => {
        this.queryTable()
    }

    async queryTable(){
        const {pagination} = this.state;
        const {location} = this.props;
        const type = location.pathname.split('/')[1];
        const id = location.search.split("=")[1];
        const storage = window.localStorage;
        const tel = storage.getItem("user_name");
        const url = type === "partyMemList" ? partyMembers : type === "teamMemList" ? teamMembers : myTeam;
        const paramId = type === "partyMemList" ? 'partybranch_id' : type === "teamMemList" ? 'team_id' : 'tel';
        const team_type = type === "myTeamList" ? 3 : type === "demoCommunity" ? 2 : type === "interestGroup" ? 1 :''
        Toast.loading('加载中...', 0, null, true)
        const {data,success,msg} = await Http('get',url,{[paramId]:id || tel,team_type,currentPage:pagination.currentPage,pageSize:pagination.pageSize});
        try{
            Toast.hide()
            // const {data:{list, currentPage, pageSize, totalPage, totalCount},success} = await Http('get',url,{[paramId]:id,currentPage:pagination.currentPage,pageSize:pagination.pageSize});
            success ? this.setState({
                list:data,
                // pagination:{
                //     currentPage,
                //     totalPage,
                //     pageSize,
                //     totalCount
                // }
            }) : Toast.fail(msg,2)
        }catch(e){
            console.log(e)
            Toast.fail(msg,2)
        }
    }

    refreshData = () => {
        // const {pagination} = this.state;
        // const {currentPage, totalPage} = pagination;
        // currentPage === totalPage ? this.setState({finishText:'已是最新内容'})
        //  : this.setState({pagination:{
        //      ...pagination,
        //      currentPage:currentPage + 1
        //     }}, this.queryTable)
    }

    render(){
        const {finishText, list} = this.state;
        const {pathname} = window.location;
        return(
            <Refresh 
            direction='up' 
            refreshData={this.refreshData}
            finishText={finishText}>
                <div className="basic-form member-list">
                    <List className="party-list">
                        {
                            list.map((data,idx) => <Item key={idx} onClick={ () => pathname.indexOf('myTeamList') > -1 && (this.props.history.push(`/myTeam?data=${JSON.stringify(data)}`))} extra={data.tel}>{data.member_name || data.teamName}</Item>)
                        }
                    </List>
                </div>
            </Refresh>
        )
    }
}
export default connect(
    null,
    (dispatch)=>{
        return {
            router:bindActionCreators(routerAction,dispatch)
        }
    }
)(Index)