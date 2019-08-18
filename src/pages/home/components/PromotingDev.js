/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-07 22:29:00
 * @LastEditTime: 2019-08-10 21:55:53
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import CommonPage from './CommonPage'

const gridText = ['我的团队','畅谈新成就','建言新时代','关心下一代','人才对接','榜样力量'];
const Index = (props) => <CommonPage {...props} gridText={gridText} type={2} sum={6}/>
export default Index