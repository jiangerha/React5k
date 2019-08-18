/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-05 20:34:27
 * @LastEditTime: 2019-08-12 21:27:26
 * @LastEditors: Please set LastEditors
 */
import {CHANGEPATH} from '@types/routerType'
const indexRoutes = Array.from(new Array(4)).map((_val, i) => `/index/${i}`);
const annRoutes = Array.from(new Array(3)).map((_val, i) => `/announcement/${i}`);
const districtRoutes = Array.from(new Array(3)).map((_val, i) => `/district/${i}`);
const initState={
    path:null,
    paths:['/','/index',...indexRoutes,'/announcement',...annRoutes,'/district',...districtRoutes,'/personal'],
    title:'首页'
}
export default (state=initState,action)=>{
    switch(action.type){
        case CHANGEPATH:
            return {
                ...state,
                path:action.path,
                title:action.title
            }
        default:
            return state
    }
}