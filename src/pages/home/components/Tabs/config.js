/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-06 21:50:48
 * @LastEditTime: 2019-08-10 15:03:00
 * @LastEditors: Please set LastEditors
 */
const activeColor = "#fe543a"
export default {
    tabs:[
        { title: "领袖日历" },
        { title: "党建引领" },
        { title: "助推发展" },
        { title: "幸福生活" },
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
            'marginLeft':'calc(12.5% - 10px)'
        },
        tabBarTextStyle:{
            'fontSize':14
        }
    }
}