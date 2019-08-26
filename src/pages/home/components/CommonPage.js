/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-07 22:42:41
 * @LastEditTime: 2019-08-26 23:33:40
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import IconGrid from '@/new_components/IconGrid.jsx'
import api from '@/httpTool/httpUrls'
const {columnIdObj:{LeadingParty, PromotingDev, HappyLife}} = api;

const pathList1 = [
    {
        path:'partyBuild',
        columnId:LeadingParty.dzdg,
    },
    {
        path:'thematicEdu',
        columnId:LeadingParty.ztjy,
    },
    { path:'partFee' },
    {
        path:'characteBran',
        columnId:LeadingParty.tszb,
    },
    { path:'myBran', },
    { path:'pioModel', columnId:LeadingParty.xfmf,}
];
const pathList2 = [
    {
        path:'myTeamList',
    },
    {
        path:'newAchieve',
        columnId:PromotingDev.ctxcj,
    },
    { 
        path:'newTimes',
        columnId:PromotingDev.jyxsd,
     },
    {
        path:'nexrGrne',
        columnId:PromotingDev.gxxyd,
    },
    {
        path:'talentTock',
        columnId:PromotingDev.rcdj,
    },
    {path:'modelPower',columnId:PromotingDev.byll},
];
const pathList3 = [
    {
        path:'agedUniversity',
        columnId:HappyLife.lndx,
    },
    {
        path:'actiPosition',
        columnId:HappyLife.hdzd,
    },
    { path:'demoCommunity' },
    { path:'interestGroup' },
    {
        path:'worksExhibi',
        columnId:HappyLife.wx,
    },
    {
        path:'lifeService',
    },
    {
        path:'healthKnow',
        columnId:HappyLife.jkzs,
    },
    {
        path:'recallMiss',
        columnId:HappyLife.zysn,
    },
];


export default class Index extends React.PureComponent{
    render(){
        const {gridText, type, sum} = this.props;
        const pathList = type === 1 ? pathList1 : type === 2 ? pathList2 : type === 3 ? pathList3 : [];
        const gridData = Array.from(new Array(sum)).map((_val, i) => ({
            icon: require(`../../../common/imgs/grid/${type}-${i}.png`),
            text: gridText[i],
            columnId: pathList[i].columnId,
            path:pathList[i].path
        }));
        return(
            <div className="leader-calender">
                <IconGrid {...this.props} data={gridData}/>
            </div>
        )
    }
    
}