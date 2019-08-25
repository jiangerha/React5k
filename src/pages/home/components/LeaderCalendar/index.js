/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-06 20:59:07
 * @LastEditTime: 2019-08-25 14:51:33
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import Swiper from '@/new_components/Swiper.jsx'
import IconGrid from '@/new_components/IconGrid.jsx'
import CardList from '@/new_components/CardList.jsx'
import Refresh from '@/new_components/Refresh'
import Http from '@/httpTool/http'
import api from '@/httpTool/httpUrls'
import './index.scss'

const {columnIdObj:{LeaderCalendar,home}} = api;

const gridText = [
    {
        text:'时政要闻',
        columnId:LeaderCalendar.szyw,
    },
    {
        text:'工作动态',
        columnId:LeaderCalendar.gzdt,
    },
    {
        text:'一线风采',
        columnId:LeaderCalendar.yxfc,
    },
    {
        text:'金色记忆',
        columnId:LeaderCalendar.jsjy,
    },
];
const pathList = ['affairs','dynamics','presence','memory'];

const gridData = Array.from(new Array(4)).map((_val, i) => ({
    icon: require(`../../../../common/imgs/grid/0-${i}.png`),
    text: gridText[i].text,
    columnId: gridText[i].columnId,
    path: pathList[i]
}));

export default class Index extends React.PureComponent{
    state = {
        list:[]
    }
    componentDidMount = () => {
        this.querySwiper()
    }

    async querySwiper(){
        const {data:{list},success} = await Http('get',api.list,{columnId:home.banner});
        try{
            success && this.setState({
                list
            })
        }catch(e){
            console.log(e)
        }
    }
    render(){
        return(
            <Refresh direction='down'>
                <div className="leader-calender marginBot30">
                    <Swiper list={this.state.list}/>
                    <IconGrid {...this.props} data={gridData}/>
                    <CardList {...this.props} columnId={home.lxrl}/>
                </div>
            </Refresh>
            
        )
    }
}