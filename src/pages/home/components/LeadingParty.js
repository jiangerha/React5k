/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-07 22:29:16
 * @LastEditTime: 2019-08-15 15:19:11
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import CommonPage from './CommonPage'

const gridText = ['党建知识', '专题教育', '党费管理', '特色支部', '我的支部'];
const Index = (props) => <CommonPage  {...props} gridText={gridText} type={1} sum={5}/>
export default Index;