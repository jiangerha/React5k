/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 11:36:48
 * @LastEditTime: 2019-08-25 18:03:30
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
import ManIcon from '@/common/imgs/tel-man.png';
import TelIcon from '@/common/imgs/tel-pho.png';
import '../index.scss'

const {partyMembers, teamMembers, myTeam} = api;

const Item = List.Item;

const ListData = Array.from(new Array(20)).map((_val, i) => ({
    name: '活动经费',
}));

const CardItem = (props) => {
    const {data} = props
    return (
        <div className="tel-card">
            <div className="card-left">
                <img src={ManIcon}/>
                <div className="card-extra">
                    <p>{`姓名:${data.member_name || data.teamName}`}</p>
                    <p className="extra">{`职务:${data.tel}`}</p>
                    <p className="extra">{`电话:${data.tel}`}</p>
                </div>
            </div>
            <div className="card-right">
                <a href={`tel:${data.tel}`}>
                    <img src={TelIcon}/>
                </a>
            </div>
        </div>
    )
}

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
        const {pathname} = window.location;
        const text = pathname === '/myTeamList' ? '我的团队' : pathname === '/partyMemList' ? '党员名单' : pathname === '/demoCommunity' ? '示范社区' : pathname === '/teamMemList' ? '队员名单' : '兴趣小组'
        document.title = `红岩青松-${text}`
        this.queryTable()
    }

    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
          return;
        };
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
        const linkArr = ['/demoCommunity','/myTeamList','/interestGroup']
        return(
            <Refresh 
            direction='up' 
            refreshData={this.refreshData}
            finishText={finishText}>
                <div className="basic-form member-list tel-card-list">
                    <List className="party-list">
                        {
                            list.map((data,idx) => linkArr.indexOf(pathname) === -1 ? <CardItem key={idx} data={data}/> : <Item key={idx} onClick={ () => linkArr.indexOf(pathname) > -1 && (this.props.history.push(`/myTeam?data=${encodeURI(JSON.stringify(data))}`))} extra={data.tel}>{data.member_name || data.teamName}</Item>)
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