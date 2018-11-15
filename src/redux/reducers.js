/**
 * 处理状态
 */

import {combineReducers} from 'redux'

import * as type from './action-types';

const counter = (state = 0, action) => {
  switch (action.type) {
      case type.INCREMENT:
        return state + action.number
      case type.DECREMENT:
        return state - action.number
      default:
        return state
  }
}


const handleData = (state = {isFetching: true, data: {}}, action) => {
    switch (action.type) {
        case type.REQUEST_DATA:
            return {...state, isFetching: true};
        case type.RECEIVE_DATA:
            return {...state, isFetching: false, data: action.data};
        default:
            return {...state};
    }
};

const httpData = (state = {}, action) => {
    switch (action.type) {
        case type.RECEIVE_DATA:
        case type.REQUEST_DATA:
            return {
                ...state,
                [action.category]: handleData(state[action.category], action)
            };
        default:
            return {...state};
    }
};

// 多函数组合
export default combineReducers({
  counter,
  httpData
})

