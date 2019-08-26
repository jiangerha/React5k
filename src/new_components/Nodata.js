/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 23:11:40
 * @LastEditTime: 2019-08-26 23:25:11
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import { Result, Icon } from 'antd-mobile';

export default class NoData extends React.PureComponent{
    render(){
        return(
            <div>
                <Result
                    img={<Icon type="cross-circle" size="lg" color="#e6e6e6" />}
                    title="暂无数据"
                    // message="由于你的支付宝账户还未绑定淘宝账户请登请登录www.taobao.com"
                />
            </div>
        )
    }
}