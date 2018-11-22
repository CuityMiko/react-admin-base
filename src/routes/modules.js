/**
 * 路由组件出口文件
 */
import Loadable from 'react-loadable';
import {Loading} from '../components/widget';

// 按需加载
const BasicForm = Loadable({
    loader: () => import('../containers/demo/forms/BasicForm'),
    loading: Loading
});

const BasicTable = Loadable({ 
    loader: () => import('../containers/demo/tables/BasicTables'),
    loading: Loading
});

/**
 * 首页
 */
const Home = Loadable({ 
    loader: () => import('../containers/main/Home'),
    loading: Loading
});

/**
 * 授权中心
 */
const AuthorizeCenter = Loadable({ 
    loader: () => import('../containers/authorize_center/AuthorizeCenter'),
    loading: Loading
});

/**
 * 数据中心
 */
const DataCenter = Loadable({ 
    loader: () => import('../containers/data_center/DataCenter'),
    loading: Loading
});

/**
 * 营销中心
 */
const MarketingCenter = Loadable({ 
    loader: () => import('../containers/marketing_center/MarketingCenter'),
    loading: Loading
});

/**
 * 会员中心
 */
const MemberCenter = Loadable({ 
    loader: () => import('../containers/member_center/MemberCenter'),
    loading: Loading
});

/**
 * 油品管理
 */
const OilManage = Loadable({ 
    loader: () => import('../containers/oil_manage/OilManage'),
    loading: Loading
});

/**
 * 油站管理
 */
const OiltationManage = Loadable({ 
    loader: () => import('../containers/oiltation_manage/OiltationManage'),
    loading: Loading
});

export default {
    BasicForm, BasicTable, Home, AuthorizeCenter, DataCenter, MarketingCenter, MemberCenter, OilManage, OiltationManage
}