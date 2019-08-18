/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 14:49:17
 * @LastEditTime: 2019-08-10 15:08:05
 * @LastEditors: Please set LastEditors
 */
const activeColor = "#fe543a"
export default {
    tabs:[
        { title: "区县" },
        { title: "部门" },
        { title: "企业" },
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