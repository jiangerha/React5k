import React from 'react'
import { Toast } from 'antd-mobile';
import Refresh from './Refresh'
import api from '@/httpTool/httpUrls'
import Http from '@/httpTool/http'

// const listData = Array.from(new Array(7)).map((_val, i) => ({
//     title:'向着网络强国阔步前行— —党的 十八大以来网信',
//     icon: require(`../common/imgs/card.png`),
//     time: '2018-04-20',
//     tag: '红岩青松',
// }));

const CardItem = (props) => {
    const {data:{title, createDate, publisher, id, coverImageUrl}} = props
    const defaultImg = require(`../common/imgs/card.png`);
    const style = {
        lineHeight: '25px',
        color: '#333',
        fontSize: '14px',
        margin: 0,
        maxHeight: '50px',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
        overflow: 'hidden',
        textOverflow:'ellipsis'
      }
    return (
        <div className="leader-card" onClick={() => props.history.push(`/details?id=${id}`)}>
            <div className="card-left">
                <p className="card-title" style={style}>{title}</p>
                <div className="card-extra">
                    <span className="card-tag">{publisher || '红岩青松'}</span>
                    <span className="card-time">{createDate.substring(0,10)}</span>
                </div>
            </div>
            <div className="card-img-right">
            <img ref={ref => this.img = ref} src={`http://113.125.49.13:8888/tianti-module-admin${coverImageUrl}` || defaultImg} onError={(e) => e.target.src = defaultImg} alt=""/>
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
                <div className="card-list">
                    {
                        list.length > 0 && list.map((i,idx) => <CardItem key={idx} data={i} {...this.props}/>)
                    }
                </div>
            </Refresh>
            
        )
    }
}