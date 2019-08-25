/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-05 20:34:27
 * @LastEditTime: 2019-08-25 16:09:08
 * @LastEditors: Please set LastEditors
 */
const initState = true;
export default (state=initState,action)=>{
    switch(action.type){
        case 'notShow':
            return false
        default:
            return state
    }
}