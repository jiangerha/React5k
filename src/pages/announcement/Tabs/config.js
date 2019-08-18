/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 14:49:17
 * @LastEditTime: 2019-08-10 15:02:51
 * @LastEditors: Please set LastEditors
 */
const activeColor = "#fe543a"
export default {
    tabs:[
        { title: "通知公告" },
        { title: "调查问卷" },
        { title: "知识竞赛" },
    ],
    style:{
        tabBarInactiveTextColor:'#333',
        tabBarActiveTextColor:activeColor,
        tabBarBackgroundColor:'#fff',
        distanceToChangeTab:0.2,
        tabBarUnderlineStyle:{
            'width':'20px',
            'height':'2px',
            "background":activeColor,
            'marginLeft':'calc(16.5% - 10px)'
        },
        tabBarTextStyle:{
            'fontSize':14
        }
    }
}