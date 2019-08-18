/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 09:30:31
 * @LastEditTime: 2019-08-15 10:00:54
 * @LastEditors: Please set LastEditors
 */
import axios from 'axios';

export default function(method, url, params = {}) {
    // 首先判断是get请求还是post请求
    let data = method.toLocaleLowerCase() === 'get' ? 'params' : 'data';
    return axios({
        method,
        url,
        [data]: params // 差异点在于data的值
    }).then((res) => {
        return Promise.resolve(res.data);
    }).catch((err) => {
        return Promise.reject(err);
    })
}