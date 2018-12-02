/**
 * 处理状态
 */

import {combineReducers} from 'redux'

import * as type from './action-types';

/**
 * 引入各个模块的reducers
 */

// 登录
import LoginReducers from '../../login/login.reducer'

// 授权中心
import AuthorizeCenterReducers from '../../authorize_center/redux/reducers'

// 数据中心
import DataCenterReducers from '../../data_center/data_center.reducer'

// 首页
import HomeReducers from '../../main/redux/reducers'

// 营销中心
import MarketingCenterReducers from '../../marketing_center/marketing_center.reducer'

// 会员中心
import MemberCenterReducers from '../../member_center/member_center.reducer'

// 油品管理
import OilManageReducers from '../../oil_manage/redux/reducers'

// 油站管理
import OiltationManageReducers from '../../oiltation_manage/oiltation_manage.reducer'

/**
 * 公共reducer
 */

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
  httpData,
  ...LoginReducers,
  ...AuthorizeCenterReducers,
  ...DataCenterReducers,
  ...HomeReducers,
  ...MarketingCenterReducers,
  ...MemberCenterReducers,
  ...OilManageReducers,
  ...OiltationManageReducers
})

