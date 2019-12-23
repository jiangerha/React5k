/*
 * @Author: your name
 * @Date: 2019-12-23 21:59:53
 * @LastEditTime : 2019-12-23 22:08:18
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Party-info-pm\src\pages\district\components\business.js
 */
import React from 'react'
import ManIcon from '@/common/imgs/tel-man.png';
import TelIcon from '@/common/imgs/tel-pho.png';
const TelItem = (props) => {
    const {data} = props
    return (
        <div className="tel-card">
            <div className="card-left">
                <img src={ManIcon}/>
                <div className="card-extra">
                    <p>{`单位:${data.unitName}`}</p>
                    <p className="extra">{`电话:${data.tel}`}</p>
                </div>
            </div>
            <div className="card-right">
                <a href={`tel:${data.tel}`}>
                    <img src={TelIcon}/>
                </a>
            </div>
        </div>
    )
}
export default TelItem;