import React from 'react'
import { Toast } from 'antd-mobile';
import Refresh from './Refresh'
import api from '@/httpTool/httpUrls'
import Http from '@/httpTool/http'

const CardItem = (props) => {
    const {title, createDate, publisher, id} = props.data;
    const style = {
        lineHeight: '25px',
        color: '#333',
        fontSize: '14px',
        margin: 0,
        maxHeight: '50px',
        display: '-webkit-box',
        WwebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
        overflow: 'hidden',
        textOverflow:'ellipsis'
      }
    return (
        <div className="leader-card" onClick={() => props.history.push(`/details?id=${id}`)}>
            <div className="card-left" style={{width:'100%'}}>
                <p className="card-title" style={style}>{title}</p>
                <div className="card-extra" style={{marginTop:7}}>
                    <span className="card-tag">{publisher || '红岩青松'}</span>
                    <span className="card-time">{createDate}</span>
                </div>
            </div>
        </div>
    )
}

export default class Main extends React.Component{

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
        const {columnId,location:{search}} = this.props;
        const columnId1 = columnId ? columnId : search.split("=")[1];
        Toast.loading('加载中...', 0, null, true)
        try{
            const {data:{list, currentPage, pageSize, totalPage, totalCount},success} = await Http('get',api.list,{columnId:columnId1,currentPage:pagination.currentPage,pageSize:pagination.pageSize});
            success && this.setState({
                list:[
                    ...this.state.list,
                    ...list
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

    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
          return;
        };
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
        const {finishText, list} = this.state;
        return(
            <Refresh 
            direction='up' 
            refreshData={this.refreshData}
            finishText={finishText}>
                <div className="card-list" style={{marginBottom:10}}>
                    {
                        list.length > 0 && list.map((i,idx) => <CardItem key={idx} data={i} {...this.props}/>)
                    }
                </div>
            </Refresh>
        )
    }
}