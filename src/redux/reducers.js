/**
 * 处理状态
 */

import {combineReducers} from 'redux'

import {INCREMENT, DECREMENT} from './action-types'

function counter(state = 0, action) {
   switch (action.type) {
       case INCREMENT:
         return state + action.number
       case DECREMENT:
         return state - action.number
       default:
         return state
   }
}

// 多函数组合
export default combineReducers({
    counter
})