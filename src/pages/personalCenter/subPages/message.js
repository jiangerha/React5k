/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 22:11:46
 * @LastEditTime: 2019-08-18 12:55:46
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as routerAction from '@actions/routerAction'
import { Toast } from 'antd-mobile';
import Refresh from '@/new_components/Refresh'
import api from '@/httpTool/httpUrls'
import Http from '@/httpTool/http'
import Scroll from '@/components/Scroll'
import { SwipeAction, List } from 'antd-mobile';

const Item = List.Item;

const ListData = Array.from(new Array(4)).map((_val, i) => ({
    title: '标题最多可以这么长这么长这么内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要长哦',
    text: '内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要',
    time:'2019-08-01  14:56:32',
    isRead:true
}));

class Main extends React.PureComponent {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isBaGre:false,
    //         idx:null
    //     }
    // }
    state = {
        visible:false,
        content:'',
        list:[],
        pagination:{
            currentPage:1,
            pageSize:10
        },
        finishText:'',
        isBaGre:false,
        idx:null
    }

    componentDidMount = () => {
        this.queryTable()
    }

    async queryTable(){
        // const {pagination} = this.state;
        const storage = window.localStorage;
        const user_name = storage.getItem("user_name");
        Toast.loading('加载中...', 0, null, true)
        try{
            // const {data:{list, currentPage, pageSize, totalPage, totalCount},success} = await Http('get',api.msgList,{user_name,currentPage:pagination.currentPage,pageSize:pagination.pageSize});
            const {data,success} = await Http('get',api.msgList,{user_name});
            success && this.setState({
                list:data,
            })
        }catch(e){
            console.log(e)
        }finally{
            Toast.hide()
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

    async deleteMsg(msg_id) {
        Toast.loading('加载中...', 0, null, true)
        const {msg,success} = await Http('get',api.deleteMsg,{msg_id});
        try{
            Toast.hide()
            if(success){
                Toast.success('操作成功', 2)
                this.queryTable()
            }else{
                Toast.fail(msg, 2)
            }
        }catch(e){
            console.log(e)
            Toast.hide()
            Toast.fail(msg, 2);
        }
    }

    render() {
        const {isBaGre, idx, finishText, list} = this.state;
        return (
            <div className="personal-message">
                <Refresh
                    direction='up' 
                    refreshData={this.refreshData}
                    finishText={finishText}>
                            <div className="list-box">
                                <List>
                                    {
                                        list.map((i,index) => (
                                            <div className="message-item" key={index}>
                                                <p className="time">{i.create_date.substring(0,19)}</p>
                                                <SwipeAction
                                                    style={{ backgroundColor: 'gray' }}
                                                    autoClose
                                                    right={[
                                                        {
                                                            text: '删除',
                                                            onPress: () => this.deleteMsg(i.id),
                                                            style: { backgroundColor: '#FF523A', color: 'white', width:'78px', fontSize:'16px'},
                                                        }
                                                    ]}
                                                onOpen={() => this.setState({isBaGre:true,idx:index})}
                                                onClose={() => this.setState({isBaGre:false,idx:null})}
                                            >
                                                <Item
                                                className={isBaGre && idx === index ? 'bg-gre' : ''}
                                                arrow="horizontal"
                                                onClick={e => console.log(e)}
                                                >
                                                <p className={i.isRead ? 'title grey' : 'title'}>{i.msg_title}</p>
                                                <p className="text muli-ellipsis">{i.msg_content}</p>
                                                </Item>
                                            </SwipeAction>
                                            </div>
                                        ))
                                    }
                                </List>
                            </div>
                </Refresh>
            </div>
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
)(Main)