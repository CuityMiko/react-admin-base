/**
 * 路由组件出口文件
 */
import Loadable from 'react-loadable';
import {Loading} from '../components/widget/';

// 按需加载
const BasicForm = Loadable({
    loader: () => import('./forms/BasicForm'),
    loading: Loading
});

const BasicTable = Loadable({ 
    loader: () => import('./tables/BasicTables'),
    loading: Loading
});

const AdvancedTable = Loadable({ 
    loader: () => import('./tables/AdvancedTables'),
    loading: Loading
});

const AsynchronousTable = Loadable({ 
    loader: () => import('./tables/AsynchronousTable'),
    loading: Loading
});

const Dashboard = Loadable({ 
    loader: () => import('./dashboard/Dashboard'),
    loading: Loading
});

const AuthBasic = Loadable({ 
    loader: () => import('./auth/Basic'),
    loading: Loading
});

const RouterEnter = Loadable({ 
    loader: () => import('./auth/RouterEnter'),
    loading: Loading
});

export default {
    BasicForm, BasicTable, AdvancedTable, AsynchronousTable,
    Dashboard, AuthBasic, RouterEnter
}