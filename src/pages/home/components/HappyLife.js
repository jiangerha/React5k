/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-07 22:36:40
 * @LastEditTime: 2019-08-10 22:28:55
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import CommonPage from './CommonPage'

const gridText = ['老年大学','活动阵地','示范社区','兴趣小组','作品展示','生活服务','健康知识','追忆思念'];
const Index = (props) => <CommonPage  {...props} gridText={gridText} type={3} sum={8}/>
export default Index