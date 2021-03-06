/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 14:49:17
 * @LastEditTime: 2019-08-25 11:12:13
 * @LastEditors: Please set LastEditors
 */
const activeColor = "#fe543a"
export default {
    tabs:[
        { title: "区县" },
        { title: "机关/部门" },
        { title: "高校" },
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
            'marginLeft':'calc(12.5% - 10px)'
        },
        tabBarTextStyle:{
            'fontSize':14
        }
    }
}