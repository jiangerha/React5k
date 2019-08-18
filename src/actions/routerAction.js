/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-05 20:34:27
 * @LastEditTime: 2019-08-12 20:21:02
 * @LastEditors: Please set LastEditors
 */
import {CHANGEPATH} from '@types/routerType'
import {CHANGETab} from '@types/routerType'

export const changePath = ({path,title}) => {
    return {path,title,type:CHANGEPATH}
}

export const changeTab = (page) => {
    return {page,type:CHANGETab}
}