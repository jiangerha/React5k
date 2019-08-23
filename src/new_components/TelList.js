/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 22:04:51
 * @LastEditTime: 2019-08-23 22:30:21
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import { Toast } from 'antd-mobile';
import Refresh from './Refresh'
import api from '@/httpTool/httpUrls'
import Http from '@/httpTool/http'
import ManIcon from '@/common/imgs/tel-man.png';
import TelIcon from '@/common/imgs/tel-pho.png';

const listData = Array.from(new Array(7)).map((_val, i) => ({
    tag: '红岩青松',
}));

const CardItem = (props) => {
    const {data:{title, createDate, publisher, id}} = props
    return (
        <div className="tel-card">
            <div className="card-left">
                <img src={ManIcon}/>
                <div className="card-extra">
                    <p>{`姓名:${'张婉婷'}`}</p>
                    <p>{`电话:${'225555445555'}`}</p>
                </div>
            </div>
            <div className="card-right">
                <a href="tel:18883248515">
                    <img src={TelIcon}/>
                </a>
            </div>
        </div>
    )
}

export default class Main extends React.PureComponent{
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

    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
          return;
        };
    }

    async queryTable(){
        const {pagination} = this.state;
        if(!this.props.location) return;
        const {columnId,location:{search}} = this.props;
        const columnId1 = columnId ? columnId : search.split("=")[1];
        Toast.loading('加载中...', 0, null, true)
        try{
            const {data:{list, currentPage, pageSize, totalPage, totalCount},success} = await Http('get',api.list,{columnId:columnId1,currentPage:pagination.currentPage,pageSize:pagination.pageSize});
            success && this.setState({
                list:[
                    ...this.state.list,
                    ...list,
                ],
                pagination:{
                    currentPage,
                    totalPage,
                    pageSize,
                    totalCount
                }
            })
        }catch(e){
            console.log(e)
        }finally{
            Toast.hide()
        }
    }

    refreshData = () => {
        const {pagination} = this.state;
        const {currentPage, totalPage} = pagination;
        currentPage === totalPage ? this.setState({finishText:'已是最新内容'})
         : this.setState({pagination:{
             ...pagination,
             currentPage:currentPage + 1
            }}, this.queryTable)
    }
    render(){
        const {list, finishText} = this.state
        return(
            <Refresh 
                direction='up'
                refreshData={this.refreshData}
                finishText={finishText}>
                <div className="tel-card-list">
                    {
                        // list.length > 0 && list.map((i,idx) => <CardItem key={idx} data={i} {...this.props}/>)
                        listData.length > 0 && listData.map((i,idx) => <CardItem key={idx} data={i} {...this.props}/>)
                    }
                </div>
            </Refresh>
            
        )
    }
}