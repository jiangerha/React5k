/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 13:10:58
 * @LastEditTime: 2019-08-25 11:51:14
 * @LastEditors: Please set LastEditors
 */

import Home from '@/pages/home/index'
import Login from '@/pages/login'
import Affairs from '@/pages/home/subPages/affairs'
import Details from '@/pages/home/subPages/details'
import PartyBuild from '@/pages/home/subPages/partyBuild'
import PartFee from '@pages/home/subPages/partFee'
import MyBran from '@pages/home/subPages/myBran/index'
import PartyMemList from '@pages/home/subPages/myBran/partyMemList'
import ActivityReg from '@pages/home/subPages/myBran/activityReg'
import BranActivity from '@pages/home/subPages/myBran/branActivity'
import MyTeam from '@pages/home/subPages/myTeam'
import InterestGroup from '@pages/home/subPages/interestGroup'
import WorksExhibi from '@pages/home/subPages/worksExhibi'
import LifeService from '@pages/home/subPages/lifeService'
import DemoCommunity from '@pages/home/subPages/demoCommunity/index'

import PersonalCenter from '@/pages/personalCenter/index'
import PersonalMessage from './personalCenter/subPages/message'
import PersonalSugge from './personalCenter/subPages/suggestion'
import PersonalPro from './personalCenter/subPages/problem'
import PersonalFriend from './personalCenter/subPages/findFriend'
import ChangePwd from './personalCenter/subPages/changePwd'
import NewPhone from './personalCenter/subPages/newPhone'
import Agreement from './personalCenter/subPages/agreement'

import Announcement from './announcement/index'
import District from './district/index'
const routes = [
    {
        name:'登录',
        path:'/login',
        component:Login
    },
    {
        name:'首页',
        path:'/',
        component:Home
    },
    {
        name:'红岩青松-领袖日历',
        path:'/index',
        component:Home
    },
    {
        path:'/index/:tabStatus',
        component:Home
    },
    {
        name:'红岩青松-时政要闻',
        path:'/affairs',
        component:Affairs
    },
    {
        name:'红岩青松-工作动态',
        path:'/dynamics',
        component:Affairs
    },
    {
        name:'红岩青松-一线风采',
        path:'/presence',
        component:Affairs
    },
    {
        name:'红岩青松-金色记忆',
        path:'/memory',
        component:Affairs
    },
    {
        name:'党建知识',
        path:'/partyBuild',
        component:PartyBuild
    },
    {
        name:'专题教育',
        path:'/thematicEdu',
        component:Affairs
    },
    {
        name:'畅谈新成就',
        path:'/newAchieve',
        component:Affairs
    },
    {
        name:'建言新时代',
        path:'/newTimes',
        component:Affairs
    },
    {
        name:'关心下一代',
        path:'/nexrGrne',
        component:Affairs
    },
    {
        name:'人才对接',
        path:'/talentTock',
        component:Affairs
    },
    {
        name:'榜样力量',
        path:'/modelPower',
        component:Affairs
    },
    {
        name:'党费管理',
        path:'/partFee',
        component:PartFee
    },
    {
        name:'特色支部',
        path:'/characteBran',
        component:Affairs
    },
    {
        name:'先锋模范',
        path:'/pioModel',
        component:Affairs
    },
    {
        name:'健康知识',
        path:'/healthKnow',
        component:Affairs
    },
    {
        name:'追忆思念',
        path:'/recallMiss',
        component:Affairs
    },
    {
        name:'我的支部',
        path:'/myBran',
        component:MyBran
    },
    {
        name:'团队列表',
        path:'/myTeamList',
        component:PartyMemList
    },
    {
        name:'党员名单',
        path:'/partyMemList',
        component:PartyMemList
    },
    {
        name:'队员名单',
        path:'/teamMemList',
        component:PartyMemList
    },
    {
        name:'组员名单',
        path:'/groupMemList',
        component:PartyMemList
    },
    {
        name:'老年大学',
        path:'/agedUniversity',
        component:Affairs
    },
    {
        name:'活动阵地',
        path:'/actiPosition',
        component:Affairs
    },
    {
        name:'示范社区',
        path:'/demoCommunity',
        component:PartyMemList
    },
    {
        name:'活动报名',
        path:'/activityReg',
        component:ActivityReg
    },
    {
        name:'支部动态',
        path:'/branActivity',
        component:BranActivity
    },
    {
        name:'我的团队',
        path:'/myTeam',
        component:MyTeam
    },
    {
        name:'兴趣小组',
        path:'/interestGroup',
        component:PartyMemList
    },
    {
        name:'作品展示',
        path:'/worksExhibi',
        component:WorksExhibi
    },
    {
        name:'生活服务',
        path:'/lifeService',
        component:LifeService
    },
    {
        name:'个人中心',
        path:'/personal',
        component:PersonalCenter
    },
    {
        name:'消息通知',
        path:'/personal/message',
        component:PersonalMessage
    },
    {
        name:'意见建议',
        path:'/personal/suggestion',
        component:PersonalSugge
    },
    {
        name:'困难问题',
        path:'/personal/problem',
        component:PersonalPro
    },
    {
        name:'寻找好友',
        path:'/personal/findFriend',
        component:PersonalFriend
    },
    {
        name:'修改密码',
        path:'/personal/changePwd',
        component:ChangePwd
    },
    {
        name:'修改手机号',
        path:'/personal/newPhone',
        component:NewPhone
    },
    {
        name:'关于红岩青松',
        path:'/personal/agreement',
        component:Agreement
    },
    {
        name:'红岩青松-通知公告',
        path:'/announcement',
        component:Announcement
    },
    {
        name:'红岩青松-通讯录',
        path:'/district',
        component:District
    },
    {
        name:'正文详情',
        path:'/details',
        component:Details
    },
]
export default routes