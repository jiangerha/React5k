/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-05 20:34:27
 * @LastEditTime: 2019-08-25 16:09:31
 * @LastEditors: Please set LastEditors
 */
import {combineReducers} from 'redux'

import routerReducer from './routerReducer'
import showAdReducer from './showAdReducer'

export default combineReducers({
    routerReducer,
    showAdReducer
})