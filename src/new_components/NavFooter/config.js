/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-05 21:34:45
 * @LastEditTime: 2019-08-25 11:10:45
 * @LastEditors: Please set LastEditors
 */
const returnImgCon = (num) => {
    return {
        icon:require(`../../common/imgs/nav${num}-icon.png`),
        selectedIcon:require(`../../common/imgs/nav${num}-icon-on.png`),
    }
}

export default {
    data:[
        {
            ...returnImgCon(1),
            title:'首页',
            key:'index'
        },
        {
            ...returnImgCon(2),
            title:'通知公告',
            key:'announcement'
        },
        {
            ...returnImgCon(3),
            title:'通讯录',
            key:'district'
        },
        {
            ...returnImgCon(4),
            title:'个人中心',
            key:'personal'
        }
    ],
    style:{
        unselectedTintColor:"#999",
        tintColor:"#ff523A",
        barTintColor:"#fff",
    }
}